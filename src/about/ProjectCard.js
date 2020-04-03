import { Card } from "react-bootstrap";
import React from 'react';

export class ProjectCard extends React.Component {
    render() {
        return (
            <Card style={{ width: "18rem", borderRadius: "10px" }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
                    <Card.Text>
                        {this.props.desc}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}
