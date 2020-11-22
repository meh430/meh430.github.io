import "./About.css";
import React from "react";
import { Card } from "react-bootstrap";
import { Image } from "semantic-ui-react";

const emphColor = { color: "#78BBEE" };

export const Profile = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Card
                style={{
                    maxWidth: "700px",
                    margin: "30px",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.16), 0 6px 12px rgba(0,0,0,0.23)",
                    borderRadius: "20px",
                    backgroundColor: props.dark ? "#2D2E31" : "#FAFAFA",
                }}
            >
                <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px" }}>
                    <Image
                        src="https://raw.githubusercontent.com/meh430/meh430.github.io/source/src/about/imgs/prof.png"
                        size="medium"
                        circular
                        style={{ margin: "20px" }}
                    />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "5px",
                        }}
                    >
                        <a
                            className="social"
                            style={{ color: "#0072b1" }}
                            href="https://www.linkedin.com/in/mehul-pillai-36b343170/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        <a
                            className="social"
                            style={{ color: props.dark ? "white" : "black" }}
                            href="https://github.com/meh430"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fab fa-github-square" />
                        </a>
                        <a
                            className="social"
                            style={{ color: "#C13584" }}
                            href="https://www.instagram.com/mehul.pillai/?hl=en"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fab fa-instagram-square" />
                        </a>
                        <a
                            className="social"
                            style={{ color: "#4267B2" }}
                            href="https://www.facebook.com/mehul.pillai.50/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fab fa-facebook-square" />
                        </a>
                        <a
                            className="social"
                            style={{ color: "#D44638" }}
                            href="mailto: mehulpillai30@gmail"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fas fa-envelope" />
                        </a>
                    </div>

                    <p
                        style={{
                            fontFamily: "'Nunito', sans-serif",
                            fontSize: "18px",
                            color: props.dark ? "white" : "black",
                        }}
                    >
                        Hello, my name is <strong style={emphColor}>Mehul Pillai</strong>. I’m an aspiring{" "}
                        <strong style={emphColor}>computer scientist</strong> who loves to{" "}
                        <strong style={emphColor}>solve problems</strong> and{" "}
                        <strong style={emphColor}>build applications</strong>. I am fascinated by the idea that behind
                        every interaction we have with technology, lies lines of code written by someone, and I have a
                        strong desire to write code for society's betterment. One of the main reasons I actively pursue
                        computer science is its potential to incite change. The opportunity to{" "}
                        <strong style={emphColor}>change society for the better</strong> through programming is immense
                        and I hope to spearhead such a change in the future.
                    </p>
                </Card.Body>
            </Card>
        </div>
    );
};
