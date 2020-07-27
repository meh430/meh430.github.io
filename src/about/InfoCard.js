import React from "react";
import { Card } from "react-bootstrap";
import { Image } from "semantic-ui-react";

export const InfoCard = (props) => {
    return (
        <Card
            style={{
                margin: "15px",
                maxWidth: "500px",
                minHeight: props.isEdu ? "660px" : "fit-content",
                boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                borderRadius: "10px",
                backgroundColor: props.dark ? "#2D2E31" : "#F5F5F5",
            }}
        >
            <Card.Body
                style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
            >
                <Card.Title
                    style={{
                        color: props.dark ? "white" : "black",
                        fontSize: "22px",
                        fontFamily: "'Rubik', sans-serif",
                    }}
                >
                    {props.title}
                </Card.Title>

                {props.isEdu ? (
                    <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{
                            margin: "4px",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    >
                        <h5 style={{ color: props.dark ? "#CDCDCD" : "#808080", fontSize: "16px" }}>{props.period}</h5>
                    </Card.Subtitle>
                ) : (
                    <i style={{ display: "none" }} />
                )}
                {props.isEdu ? (
                    <Image rounded src={props.image} size="medium" />
                ) : (
                    <img
                        src={props.image}
                        style={{ margin: "10px", borderRadius: "10px", width: "90%", height: "auto" }}
                    />
                )}
                <Card.Text
                    style={{
                        margin: "15px",
                        color: props.dark ? "white" : "black",
                        fontSize: "16px",
                        fontFamily: "'Nunito', sans-serif",
                    }}
                >
                    {props.brief}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
