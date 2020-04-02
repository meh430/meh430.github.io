import React from "react";
import "./App.css";
import { DateComp } from "./entry/dateTime";

const apiKey = "5e7f67a8f96f9f072a0b0a98";
const endpoint = "https://reddtwalls-8176.restdb.io/rest/images";

class App extends React.Component {
    getImages() {
        const endpoint = "https://reddtwalls-8176.restdb.io/rest/images";
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
        console.log(json)
        if (!json.length) {
            console.log("No response for images")
            return;
        }

        for (let i = 0; i < json.length; i++) {
            let currImage = json[i]
            images += currImage["image"] + " "
        }
        let imageUrls = images.trim().split(" ")

        console.log(imageUrls)
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const chosenUrl = imageUrls[randomIndex].includes("https")
            ? imageUrls[randomIndex]
            : imageUrls[randomIndex].replace("http", "https");
        console.log(chosenUrl);
        this.setState({imgurl: chosenUrl})
    }

    constructor(props) {
        super(props);
        this.state = { imgurl: "" };
        this.getImages = this.getImages.bind(this)
        this.setImage = this.setImage.bind(this)
        setTimeout(this.getImages, 10)
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
                        onkeypress="performSearch(event)"
                    />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div id="quoteStuff" align="center">
                    <h3 id="quote" align="center" className="mainPage">
                        Hello World
                    </h3>
                    <h4 id="author" align="center" className="mainPage">
                        Pretty Epic
                    </h4>
                </div>
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
