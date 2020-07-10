import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Image } from "semantic-ui-react";

export class ProjectModal extends React.Component {
    nextImage(event) {
        let currIndex = this.state.imageIndex;
        if (currIndex + 1 >= this.props.info.images.length) {
            currIndex = 0;
        } else {
            currIndex += 1;
        }

        this.setState({ imageIndex: currIndex });
    }

    lastImage(event) {
        let currIndex = this.state.imageIndex;
        if (currIndex - 1 < 0) {
            currIndex = this.props.info.images.length - 1;
        } else {
            currIndex -= 1;
        }

        this.setState({ imageIndex: currIndex });
    }

    constructor(props) {
        super(props);
        this.state = { imageIndex: 0 };
        this.nextImage = this.nextImage.bind(this);
        this.lastImage = this.lastImage.bind(this);
    }

    render() {
        return (
            <Modal {...this.props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header style={{ backgroundColor: this.props.info.dark ? "#212121" : "white", border: "none" }}>
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                        style={{ color: this.props.info.dark ? "white" : "black" }}
                    >
                        {this.props.info.title}
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
                        backgroundColor: this.props.info.dark ? "#212121" : "white",
                    }}
                >
                    <Image rounded size="medium" src={this.props.info.images[this.state.imageIndex]} />
                    {this.props.info.images.length === 1 ? (
                        <i style={{ display: "none" }} />
                    ) : (
                        <div style={{ flexDirection: "column", alignItems: "center", marginTop: "15px" }}>
                            <i
                                onClick={this.lastImage}
                                className="fas fa-chevron-circle-left"
                                style={{
                                    fontSize: "28px",
                                    margin: "5px",
                                    cursor: "pointer",
                                    color: this.props.info.dark ? "white" : "black",
                                }}
                            ></i>
                            <i
                                onClick={this.nextImage}
                                className="fas fa-chevron-circle-right"
                                style={{
                                    fontSize: "28px",
                                    margin: "5px",
                                    cursor: "pointer",
                                    color: this.props.info.dark ? "white" : "black",
                                }}
                            ></i>
                        </div>
                    )}
                    <p
                        style={{
                            fontFamily: "'Nunito', sans-serif",
                            fontSize: "16px",
                            margin: "10px",
                            color: this.props.info.dark ? "white" : "black",
                        }}
                    >
                        {this.props.info.description}
                    </p>

                    <h2 style={{ fontFamily: "'Nunito', sans-serif", color: this.props.info.dark ? "white" : "black" }}>
                        Features
                    </h2>

                    <ul style={{ width: "85%"}}>
                        {this.props.info.features.map((feature, index) => (
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
                <Modal.Footer style={{ backgroundColor: this.props.info.dark ? "#212121" : "white", border: "none" }}>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
