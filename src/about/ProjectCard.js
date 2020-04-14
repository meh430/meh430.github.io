import { Card } from "react-bootstrap";
import React from "react";
import { ProjectInfo } from "./ProjectInfo";
import "./About.css";
export class ProjectCard extends React.Component {
    render() {
        return (
            <Card style={{ borderRadius: "10px", borderColor: "#bfbdbf", width: "18em" }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
                    <Card.Text>{this.props.description}</Card.Text>
                    <center>
                        <a
                            align="center"
                            id="repoLink"
                            className="backButton"
                            href={this.props.features[this.props.features.length - 1]}
                            rel="noopener noreferrer"
                            target="_blank"
                        ></a>
                    </center>
                    <ProjectInfo info={this.props} />
                </Card.Body>
            </Card>
        );
    }
}
