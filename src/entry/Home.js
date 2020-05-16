import React from "react";
import "../App.css";
import { DateComp } from "./dateTime";
import { QuoteComp } from "./greetQuote";
import { Weather } from "./weather";
import { Link } from "react-router-dom";
import { apiKey, imageEndpoint } from "../Consts";

export class Home extends React.Component {
    performSearch(event) {
        const base = "https://google.com/search?q=";
        if (event.keyCode === 13 || event.which === 13) {
            let query = document.getElementById("searchBar").value;
            let target = base;
            query.split(" ").forEach((word, index, array) => {
                if (array.length - 1 === index) {
                    target += word;
                } else {
                    target += `${word}%20`;
                }
            });

            window.open(target, "_self");
        }
    }

    setImage(json) {
        let images = "";
        console.log(json);
        if (!json.length) {
            console.log("No response for images");
            return;
        }

        for (let i = 0; i < json.length; i++) {
            let currImage = json[i];
            images += currImage["image"] + " ";
        }
        let imageUrls = images.trim().split(" ");

        console.log(imageUrls);
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const chosenUrl = imageUrls[randomIndex].includes("https")
            ? imageUrls[randomIndex]
            : imageUrls[randomIndex].replace("http", "https");
        console.log(chosenUrl);
        this.setState({
            imgurl: chosenUrl,
        });
    }

    async componentDidMount() {
        try {
            const res = await fetch(imageEndpoint, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                    apikey: apiKey,
                },
            });

            this.setImage(await res.json());
        } catch (err) {
            console.log(err);
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            imgurl: "",
        };
        this.setImage = this.setImage.bind(this);
    }

    render() {
        return (
            <div
                className="App"
                style={{
                    backgroundImage: `url(${this.state.imgurl})`,
                }}
            >
                <br />
                <DateComp />
                <br />
                <Weather/>
                <br />
                <div className="searchDiv">
                    <input
                        type="search"
                        id="searchBar"
                        align="center"
                        placeholder="Search..."
                        onKeyPress={this.performSearch}
                    />{" "}
                </div>{" "}
                <br />
                <br />
                <br />
                <br />
                <QuoteComp />
                <br />
                <br />
                <br />
                <center>
                    <Link
                        to="/about"
                        className="myButton"
                        align="center"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        about{" "}
                    </Link>{" "}
                </center>{" "}
            </div>
        );
    }
}
