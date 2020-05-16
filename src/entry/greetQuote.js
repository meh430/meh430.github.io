import React from "react";
import "../App.css";
import { quoteEndpoint } from "../Consts";
export class QuoteComp extends React.Component {
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

    async componentDidMount() {
        const res = await fetch(quoteEndpoint);
        this.displayQuote(await res.json());
    }

    constructor(props) {
        super(props);
        this.state = {
            quote: "Quote",
            author: "Author",
        };
        this.displayQuote = this.displayQuote.bind(this);
    }

    render() {
        return (
            <div id="quoteStuff" align="center">
                <h3 id="quote" align="center" className="mainPage">
                    "{this.state.quote}"
                </h3>
                <hr className="quoteRule" />
                <h4 id="author" align="center" className="mainPage">
                    <strong>{this.state.author}</strong>
                </h4>
            </div>
        );
    }
}
