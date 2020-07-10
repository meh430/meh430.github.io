import React from "react";
import { Card } from "react-bootstrap";
import { data } from "./data";

export class Skills extends React.Component {
    render() {
        return (
            <div align="center" style={{ margin: "3%" }}>
                <hr
                    style={{
                        borderRadius: "20px",
                        width: "125px",
                        backgroundColor: this.props.dark ? "white" : "black",
                        border: this.props.dark ? "1px solid white" : "1px solid black",
                    }}
                />
                <h1
                    style={{
                        fontSize: "48px",
                        fontFamily: "'Nunito', sans-serif",
                        color: this.props.dark ? "#E8E8E8" : "#868686",
                    }}
                >
                    Languages and Frameworks
                </h1>
                <br />
                <ul style={{ width: "90%" }}>
                    {data.skills.map((skill, index) => {
                        return (
                            <li key={`skill_${index}`}>
                                <Card
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "Center",
                                        flexDirection: "row",
                                        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                                        borderRadius: "10px",
                                        width: "18em",
                                        backgroundColor: this.props.dark ? "#2D2E31" : "#EBEBEB",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "80%",
                                        }}
                                    >
                                        {skill.icon.endsWith(".png") ? (
                                            <img src={skill.icon} height="36px" width="36px" />
                                        ) : (
                                            <i
                                                className={skill.icon}
                                                style={{ fontSize: "42px", margin: "0px", color: skill.color }}
                                            ></i>
                                        )}
                                        <Card.Body
                                            style={{
                                                fontFamily: "'Nunito', sans-serif",
                                                fontSize: "18px",
                                                color: this.props.dark ? "white" : "black",
                                            }}
                                        >
                                            {skill.skill}
                                        </Card.Body>
                                    </div>
                                </Card>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
