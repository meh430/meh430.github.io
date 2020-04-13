import React from "react";
import "../App.css";
const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const getOrdinal = (n) => n + (n > 0 ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : "");

export class DateComp extends React.Component {
    getDate() {
        const currDate = new Date();
        //date
        let year = currDate.getFullYear();
        let month = months[currDate.getMonth()];
        let dayNum = currDate.getDate();
        let day = days[currDate.getDay()];
        let fullDate = `${day}, ${month} ${getOrdinal(dayNum)}, ${year}`;
        this.setState({ date: fullDate });
    }

    getTime() {
        const currDate = new Date();
        let hours = currDate.getHours();
        let minutes = currDate.getMinutes();
        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        let statement = "hmm";
        if (hours >= 0 && hours < 12) {
            statement = "Good Morning";
        } else if (hours >= 12 && hours < 17) {
            statement = "Good Afternoon";
        } else if (hours >= 17 && hours < 20) {
            statement = "Good Evening";
        } else {
            statement = "Good Night";
        }

        let suffix = "hm";
        if (hours > 12) {
            suffix = "P.M";
            hours -= 12;
        } else if (hours === 12) {
            suffix = "P.M";
        } else {
            if (hours === 0) {
                hours = 12;
            }
            suffix = "A.M";
        }
        let fullTime = `${hours}:${minutes} ${suffix}`;
        this.setState({ time: fullTime, greeting: statement });
    }

    constructor(props) {
        super(props);
        this.state = { date: "date", time: "time", greeting: "greeting" };
        this.getDate = this.getDate.bind(this);
        this.getTime = this.getTime.bind(this);
        this.getDate();
        setInterval(this.getTime, 2000);
        setTimeout(this.getDate, 1000);
        setInterval(this.getDate, 18000);
    }

    render() {
        return (
            <div id="dateStuff" align="bottom">
                <h1 id="date" align="center" className="mainPage">
                    {this.state.date}
                </h1>
                <h2 id="time" align="center" className="mainPage">
                    {this.state.time}
                </h2>
                <h3 id="state" align="center" className="mainPage">
                    {this.state.greeting}
                </h3>
            </div>
        );
    }
}
