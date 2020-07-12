import { Card, Button } from "react-bootstrap";
import React, { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import "./About.css";

export const ProjectCard = (props) => {
    const [modalOpen, setOpen] = useState(false);
    return (
        <Card
            style={{
                boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                borderRadius: "10px",
                width: "19em",
                backgroundColor: props.dark ? "#2D2E31" : "#F6F6F6",
            }}
        >
            <Card.Body
                style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
            >
                <Card.Title
                    style={{
                        color: props.dark ? "white" : "black",
                        fontSize: "18px",
                        margin: "0px",
                        fontFamily: "'Rubik', sans-serif",
                    }}
                >
                    {props.title}
                </Card.Title>
                <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{
                        margin: "6px",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                    }}
                >
                    <h5 style={{ color: props.dark ? "#CDCDCD" : "#808080" }}>{props.tech}</h5>
                </Card.Subtitle>
                <Card.Text
                    style={{
                        color: props.dark ? "white" : "black",
                        fontSize: "16px",
                        margin: "0px",
                        marginTop: "6px",
                        fontFamily: "'Nunito', sans-serif",
                    }}
                >
                    {props.brief}
                </Card.Text>
                <a id="repoLink" className="backButton" href={props.repo} rel="noopener noreferrer" target="_blank"></a>
                <Button
                    variant="primary"
                    onClick={() => setOpen(true)}
                    style={{
                        fontFamily: "'Nunito', sans-serif",
                        borderRadius: "20px",
                        backgroundColor: "#7D7D7D",
                        border: "0px",
                    }}
                >
                    More Info
                </Button>
                <ProjectModal show={modalOpen} onHide={() => setOpen(false)} info={props} />
            </Card.Body>
        </Card>
    );
};
