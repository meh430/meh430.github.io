import React from "react";
import "../App.css";
import { DateComp } from "./dateTime";
import { QuoteComp } from "./greetQuote";
import { Weather } from "./weather";
import { Link } from "react-router-dom";
import { data } from "../about/data";
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

    render() {
        return (
            <div className="App">
                <div
                    className="backgroundImage"
                    style={{
                        backgroundImage: `url(${
                            data.backgrounds[Math.floor(Math.random() * data.backgrounds.length)]
                        })`,
                    }}
                ></div>
                <div className="content">
                    <br />
                    <DateComp />
                    <br />
                    <Weather />
                    <br />
                    <br />
                    <input
                        type="search"
                        id="searchBar"
                        align="center"
                        placeholder="Search..."
                        onKeyPress={this.performSearch}
                    />
                    <br />
                    <br />
                    <br />
                    <br />
                    <QuoteComp />
                    <br />
                    <br />
                    <br />
                    <Link className="aboutButton" to="/about" style={{ textDecoration: "none" }}>
                        <i className="fa fa-user"></i>
                        <span data-hover="About"></span>
                    </Link>
                </div>
            </div>
        );
    }
}
