import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import "./About.css";
export class ProjectInfo extends React.Component {
    render() {
        //replace with image carousel later
        return (
            <Modal trigger={<Button>Info</Button>} className="modal">
                <Modal.Header>{this.props.info.title}</Modal.Header>
                <Modal.Content image>
                    <Image
                        wrapped
                        size="medium"
                        src="https://github.com/meh430/RedditWall/blob/master/screens/dark_home.png?raw=true"
                    />
                    <Modal.Description>
                        <Header>Project Overview</Header>
                        <p>Project summary here</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}
