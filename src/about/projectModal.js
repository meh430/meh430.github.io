import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Image } from "semantic-ui-react";

export const ProjectModal = (props) => {
    const [imageIndex, setIndex] = useState(0);
    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header
                style={{
                    backgroundColor: props.info.dark ? "#212121" : "white",
                    border: "none",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <i
                    className="fas fa-arrow-left"
                    onClick={props.onHide}
                    style={{
                        fontSize: "26px",
                        marginLeft: "20px",
                        color: props.info.dark ? "white" : "black",
                        cursor: "pointer",
                        position: "absolute",
                        left: "0",
                    }}
                ></i>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    style={{
                        color: props.info.dark ? "white" : "black",
                        marginRight: "5px",
                        fontFamily: "'Rubik', sans-serif",
                    }}
                >
                    {props.info.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
                style={{
                    maxHeight: "calc(100vh - 210px)",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: props.info.dark ? "#212121" : "white",
                }}
            >
                <Image rounded size="medium" src={props.info.images[imageIndex]} />
                {props.info.images.length === 1 ? (
                    <i style={{ display: "none" }} />
                ) : (
                    <div style={{ flexDirection: "column", alignItems: "center", marginTop: "15px" }}>
                        <i
                            onClick={() => {
                                let currIndex = imageIndex;
                                if (currIndex - 1 < 0) {
                                    currIndex = props.info.images.length - 1;
                                } else {
                                    currIndex -= 1;
                                }
                                setIndex(currIndex);
                            }}
                            className="fas fa-chevron-circle-left"
                            style={{
                                fontSize: "28px",
                                margin: "5px",
                                cursor: "pointer",
                                color: props.info.dark ? "white" : "black",
                            }}
                        ></i>
                        <i
                            onClick={() => {
                                let currIndex = imageIndex;
                                if (currIndex + 1 >= props.info.images.length) {
                                    currIndex = 0;
                                } else {
                                    currIndex += 1;
                                }

                                setIndex(currIndex);
                            }}
                            className="fas fa-chevron-circle-right"
                            style={{
                                fontSize: "28px",
                                margin: "5px",
                                cursor: "pointer",
                                color: props.info.dark ? "white" : "black",
                            }}
                        ></i>
                    </div>
                )}
                <p
                    style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: "16px",
                        margin: "10px",
                        color: props.info.dark ? "white" : "black",
                    }}
                >
                    {props.info.description}
                </p>

                <h2 style={{ fontFamily: "'Nunito', sans-serif", color: props.info.dark ? "white" : "black" }}>
                    Features
                </h2>

                <ul style={{ width: "85%" }}>
                    {props.info.features.map((feature, index) => (
                        <li
                            key={`feature_${index}`}
                            style={{
                                fontFamily: "'Nunito', sans-serif",
                                backgroundColor: "#7B95E9",
                                color: "white",
                                padding: "5px 15px 5px 15px",
                                borderRadius: "20px",
                            }}
                        >
                            {feature}
                        </li>
                    ))}
                </ul>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: props.info.dark ? "#212121" : "white", border: "none" }}>
                <Button onClick={props.onHide} style={{ fontFamily: "'Rubik', sans-serif" }}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
