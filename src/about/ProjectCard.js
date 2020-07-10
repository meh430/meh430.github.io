import { Card, Button } from "react-bootstrap";
import React from "react";
import { ProjectModal } from "./projectModal";
import "./About.css";
export class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: false };
    }
    render() {
        return (
            <Card
                style={{
                    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                    borderRadius: "10px",
                    width: "19em",
                    backgroundColor: this.props.dark ? "#2D2E31" : "#EBEBEB",
                }}
            >
                <Card.Body
                    style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                >
                    <Card.Title
                        style={{
                            color: this.props.dark ? "white" : "black",
                            fontSize: "18px",
                            fontFamily: "'Noto Sans HK', sans-serif",
                        }}
                    >
                        {this.props.title}
                    </Card.Title>
                    <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{
                            margin: "4px",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "14px",
                        }}
                    >
                        <h5 style={{ color: this.props.dark ? "#CDCDCD" : "#808080" }}>{this.props.tech}</h5>
                    </Card.Subtitle>
                    <Card.Text
                        style={{
                            color: this.props.dark ? "white" : "black",
                            fontSize: "16px",
                            fontFamily: "'Nunito', sans-serif",
                        }}
                    >
                        {this.props.brief}
                    </Card.Text>
                    <a
                        id="repoLink"
                        className="backButton"
                        href={this.props.repo}
                        rel="noopener noreferrer"
                        target="_blank"
                    ></a>
                    <Button variant="primary" onClick={() => this.setState({ modalOpen: true })}
                        style={{
                            fontFamily: "'Nunito', sans-serif",
                            borderRadius: "20px",
                            backgroundColor: "#7D7D7D",
                            border: "0px"
                    }}
                    >
                        More Info
                    </Button>
                    <ProjectModal show={this.state.modalOpen} onHide={() => this.setState({ modalOpen: false })} info={this.props}/>
                </Card.Body>
            </Card>
        );
    }
}
