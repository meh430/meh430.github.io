import React from "react";
import "../App.css";

export class QuoteComp extends React.Component {
    getQuote() {
        const endpoint = "https://quotes.rest/qod";
        fetch(endpoint)
            .then(
                netResp => {
                    if (netResp.ok) {
                        return netResp.json();
                    }
                    throw new Error("Failed to get quote");
                },
                error => console.log(error.message)
            )
            .then(jsonResp => {
                console.log(jsonResp);
                this.displayQuote(jsonResp);
            });
    }

    displayQuote(response) {
        let quoteObj = response;
        quoteObj = quoteObj["contents"];
        let quoteArr = quoteObj["quotes"];
        if (!quoteArr.length) {
            this.setState({ quote: "Not Found", author: "Not Found" });
            return;
        }
        this.setState({ quote: quoteArr[0].quote, author: quoteArr[0].author });
    }
    constructor(props) {
        super(props);
        this.state = {
            quote: "Quote",
            author: "Author"
        };
        this.getQuote = this.getQuote.bind(this);
        this.displayQuote = this.displayQuote.bind(this);
        setTimeout(this.getQuote, 10);
    }

    render() {
        return (
            <div id="quoteStuff" align="center">
                <h3 id="quote" align="center" className="mainPage">
                    "{this.state.quote}"
                </h3>
                <hr className="quoteRule"/>
                <h4 id="author" align="center" className="mainPage">
                    <strong>{this.state.author}</strong>
                </h4>
            </div>
        );
    }
}
