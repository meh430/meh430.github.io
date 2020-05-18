import React from "react";
import { weatherKey, locKey, locEndpoint, weatherEndpoint, ipEndpoint } from "../Consts";
const toggled = "#7dc6db";
//TODO: show city?
const cardStyle = {
    margin: "0 auto",
    borderRadius: "15px",
    textShadow: "1px 1px 0px black",
    border: "2px solid #D3D3D3",
    padding: "5px",
    width: "fit-content",
    /* To adjust the height as well */
    height: "fit-content",
};

const descStyle = {
    textShadow: "1px 1px 0px black",
    color: "white",
    display: "inline-block",
    fontFamily: "Open Sans",
    margin: "10px",
    fontSize: "22px",
};

let toggleStyle = {
    textShadow: "1px 1px 0px black",
    writable: true,
    color: "#d4d6d9",
    fontSize: "16px",
    display: "inline-block",
    margin: "5px",
    cursor: "pointer",
};

const tempStyle = {
    textShadow: "1px 1px 0px black",
    textAlign: "center",
    color: "#d4d6d9",
    fontSize: "16px",
    margin: "10px",
    fontFamily: "Open Sans",
};

export class Weather extends React.Component {
    toggleUnit(event) {
        if (this.state.loading) {
            return;
        }

        let element = event.target ? event.target : event.srcElement;
        const clicked = element.innerHTML;

        let convTemp = 0;
        let feels = 0;
        let unit = "";
        let newStyle = JSON.parse(JSON.stringify(toggleStyle));
        newStyle.color = toggled;
        let isCelsius = this.state.celsius;
        if (isCelsius) {
            if (clicked === "C") {
                return;
            }
            //convert to Fa: (c x 9/5) + 32 = F
            convTemp = (this.state.temperature * (9 / 5.0) + 32.0).toFixed(2);
            feels = (this.state.feelsLike * (9.0 / 5.0) + 32.0).toFixed(2);
            unit = "F";
            isCelsius = false;
        } else {
            if (clicked === "F") {
                return;
            }
            //convert to Cel: (F-32) x 5/9 = C
            convTemp = ((this.state.temperature - 32.0) * (5.0 / 9.0)).toFixed(2);
            feels = ((this.state.feelsLike - 32.0) * (5.0 / 9.0)).toFixed(2);
            unit = "C";
            isCelsius = true;
        }

        this.setState({
            temperature: convTemp,
            feelsLike: feels,
            cStyle: isCelsius ? newStyle : toggleStyle,
            fStyle: isCelsius ? toggleStyle : newStyle,
            celsius: isCelsius,
            units: unit,
        });
    }

    finishLoading(weatherInfo) {
        console.log(weatherInfo);
        this.setState({
            loading: false,
            desc: weatherInfo.weather[0].description,
            temperature: (weatherInfo.main.temp - 273.15).toFixed(2),
            feelsLike: (weatherInfo.main["feels_like"] - 273.15).toFixed(2),
            celsius: true,
            units: "C",
        });
    }

    //happens because some adblockers block getting ips using the particular ajax call i use
    loadingError() {
        this.setState({
            temperature: "Could not load IP",
            feelsLike: "Could not load IP",
            loading: true,
            desc: "Could not Load IP",
        });
    }

    //should probably do more error handling lol
    async componentDidMount() {
        let ipRes = {};
        try {
            ipRes = await fetch(ipEndpoint);
        } catch (error) {
            this.loadingError();
            return;
        }
        const publicIp = (await ipRes.json())["ip"];
        console.log(publicIp);
        const locRes = await fetch(locEndpoint + locKey + "&ip=" + publicIp);
        const locationInfo = await locRes.json();
        console.log(locationInfo);
        const coords = locationInfo["data"]["geo"];
        const lon = coords["longitude"];
        const lat = coords["latitude"];
        console.log(weatherEndpoint + "lat=" + lat + "&lon=" + lon + "&appid=" + weatherKey);
        const weatherRes = await fetch(weatherEndpoint + "lat=" + lat + "&lon=" + lon + "&appid=" + weatherKey);
        console.log(weatherRes);
        this.finishLoading(await weatherRes.json());
    }

    constructor(props) {
        super(props);
        let celStyle = JSON.parse(JSON.stringify(toggleStyle));
        celStyle.color = toggled;
        this.state = {
            celsius: true,
            units: "C",
            temperature: 12.0,
            desc: "great",
            feelsLike: 12.0,
            cStyle: celStyle,
            fStyle: toggleStyle,
            loading: true,
        };
        this.toggleUnit = this.toggleUnit.bind(this);
        this.loadingError = this.loadingError.bind(this);
        this.finishLoading = this.finishLoading.bind(this);
    }

    render() {
        return (
            <div style={cardStyle}>
                <div>
                    <h4 style={descStyle}>{this.state.desc}</h4>
                    <h2 style={this.state.cStyle} onClick={this.toggleUnit}>
                        C
                    </h2>
                    <h2 style={toggleStyle}>|</h2>
                    <h2 style={this.state.fStyle} onClick={this.toggleUnit}>
                        F
                    </h2>
                </div>

                <h3 style={tempStyle}>
                    Temp: {this.state.temperature} {this.state.units}
                </h3>
                <h3 style={tempStyle}>
                    Feels Like: {this.state.feelsLike} {this.state.units}
                </h3>
            </div>
        );
    }
}
