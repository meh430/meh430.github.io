import React from "react";
import { Card } from "react-bootstrap";
import { skillsEndpoint, apiKey } from "../Consts";
const header = {
    textAlign: "center",
    margin: "2%",
    color: "gray",
};

const card = {
    borderRadius: "10px",
    borderColor: "#bfbdbf",
    width: "18em",
};

const fsize = {
    fontSize: "18px",
};

export class Skills extends React.Component {
    getSkills() {
        fetch(skillsEndpoint, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                apikey: apiKey,
            },
        })
            .then(
                (response) => {
                    if (response.ok) {
                        return response.json();
                    }

                    throw new Error("Failed to get skills");
                },
                (netError) => console.log(netError.message)
            )
            .then((jsonResponse) => setTimeout(() => this.parseSkills(jsonResponse), 1));
    }

    parseSkills(json) {
        let cardList = [];
        if (!json.length) {
            console.log("No response for skills");
            return;
        }
        for (let i = 0; i < json.length; i++) {
            cardList.push(
                <li key={`skill_${i}`}>
                    <Card style={card}>
                        <Card.Body style={fsize}>{json[i].skill}</Card.Body>
                    </Card>
                </li>
            );
        }

        this.setState({sList: cardList})
    }

    constructor(props) {
        super(props);
        this.state = { sList: [<li key={`skill_${0}`}><h3>Please Wait..</h3></li>] };
        this.parseSkills = this.parseSkills.bind(this)
        this.getSkills = this.getSkills.bind(this)
        setTimeout(() => this.getSkills(), 1)
    }

    render() {
        return (
            <div align="center" style={{ margin: "3%" }}>
                <hr style={{ width: "4%" }} />
                <h1 style={header}>Languages and Frameworks</h1>
                <br />
                <ul style={{ width: "90%" }}>{this.state.sList}</ul>
            </div>
        );
    }
}
