import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import "./About.css";
export class ProjectInfo extends React.Component {
    getAsList() {
        let featureList = this.props.info.features
        let listItems = []
        for (let i = 0; i < featureList.length-1; i++) {
            listItems.push(<li key={`feature_${i}`}>"{featureList[i]}"</li>)
        }
        return listItems
    }

    nextImage() {
        if (this.props.info.images.length == 1) {
            return
        }

        let currIndex = this.state.index
        if (currIndex + 1 == this.props.info.images.length) {
            currIndex = 0
        } else {
            currIndex++
        }

        this.setState({index: currIndex})
    }

    constructor(props) {
        super(props)
        this.state = {index: 0}
        this.nextImage = this.nextImage.bind(this)
        this.getAsList = this.getAsList.bind(this)
    }

    render() {
        return (
            <Modal trigger={<Button>Info</Button>} className="modal">
                <Modal.Header>{this.props.info.title}</Modal.Header>
                <Modal.Content image>
                    <Image
                        rounded
                        wrapped
                        size="big"
                        src={this.props.info.images[this.state.index]}/>
                    <Modal.Description>
                        <Header>Project Overview</Header>
                        <p>{this.props.info.description}</p>
                        <h2>Features</h2>
                        <ul>{this.getAsList()}</ul>
                        <button className="backButton" id="nextButton" onClick={this.nextImage}>Next Image</button>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}
