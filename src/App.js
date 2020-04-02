import React from "react";
import "./App.css";
import { DateComp } from "./entry/dateTime";
import { QuoteComp } from "./entry/greetQuote"

const apiKey = "5e7f67a8f96f9f072a0b0a98";
const endpoint = "https://reddtwalls-8176.restdb.io/rest/images";

class App extends React.Component {
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

    getImages() {
        fetch(endpoint, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                apikey: apiKey
            }
        })
            .then(
                response => {
                    if (response.ok) {
                        return response.json();
                    }

                    throw new Error("Failed to get image");
                },
                netError => console.log(netError.message)
            )
            .then(jsonResponse => setTimeout(() => this.setImage(jsonResponse), 3000));
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
        this.setState({ imgurl: chosenUrl });
    }

    constructor(props) {
        super(props);
        this.state = { imgurl: "" };
        this.getImages = this.getImages.bind(this);
        this.setImage = this.setImage.bind(this);
        setTimeout(this.getImages, 10);
    }

    render() {
        return (
            <div className="App" style={{ backgroundImage: `url(${this.state.imgurl})` }}>
                <br />
                <DateComp />
                <br />
                <br />
                <br />
                <br />
                <div className="searchDiv">
                    <input
                        type="search"
                        id="searchBar"
                        align="center"
                        placeholder="Search..."
                        onKeyPress={this.performSearch}
                    />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <QuoteComp/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <center>
                    <a href="https://meh430.github.io/" className="myButton" align="center">
                        about
                    </a>
                </center>
            </div>
        );
    }
}

export default App;
