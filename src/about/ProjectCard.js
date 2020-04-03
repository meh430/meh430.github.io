import { Card } from "react-bootstrap";
import React from "react";
import { ProjectInfo } from "./ProjectInfo";
import "./About.css";
export class ProjectCard extends React.Component {
    handleClick(e) {
        console.log("got here");
        this.setState({ childOpen: true });
    }

    constructor(props) {
        super(props);
        this.state = { childOpen: false };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <Card style={{ width: "18rem", borderRadius: "10px" }} onClick={this.handleClick}>
                <Card.Body>
                    <Card.Title onClick={this.handleClick}>{this.props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
                    <Card.Text>{this.props.desc}</Card.Text>
                    <center>
                        <a align="center" id="repoLink" className="backButton" href="#"></a>
                    </center>
                    <ProjectInfo info={this.props} />
                </Card.Body>
            </Card>
        );
    }
}
