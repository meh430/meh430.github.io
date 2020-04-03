import "./About.css";
import React from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { CardDeck, Card } from "react-bootstrap";

const apiKey = "5e7f67a8f96f9f072a0b0a98";
const endpoint = "https://reddtwalls-8176.restdb.io/rest/projects";

const projectFactory = (title, sub, desc, inf, feat, imgs) => {
    return {
        title: title,
        subtitle: sub,
        description: desc,
        info: inf,
        features: feat,
        images: imgs,
    };
};

export class About extends React.Component {
    getProjects() {
        fetch(endpoint, {
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

                    throw new Error("Failed to get projects");
                },
                (netError) => console.log(netError.message)
            )
            .then((jsonResponse) => setTimeout(() => this.parseProjects(jsonResponse), 1));
    }

    parseProjects(json) {
        console.log(json);
        if (!json.length) {
            console.log("No response for projects");
            return;
        }
        let pList = [];
        //title, sub, desc, inf, feat, imgs
        for (let i = 0; i < json.length; i++) {
            pList.push(
                projectFactory(
                    json[i].title,
                    json[i].subtitle,
                    json[i].description,
                    json[i].info,
                    json[i].features,
                    json[i].images
                )
            );
        }

        this.setState({ projectList: pList });
    }

    getAsList() {
        let listItems = [];
        let projectArr = this.state.projectList;
        if (projectArr.length == 0) {
            return (
                <Card style={{ borderRadius: "10px" }}>
                    <Card.Body>
                        <Card.Title>Please Wait...</Card.Title>
                    </Card.Body>
                </Card>
            );
        }
        //<li key={`project_${i}`}>

        for (let i = 0; i < projectArr.length; i++) {
            listItems.push(
                <ProjectCard
                    title={projectArr[i].title}
                    subtitle={projectArr[i].subtitle}
                    description={projectArr[i].description}
                    info={projectArr[i].info}
                    features={projectArr[i].features}
                    images={projectArr[i].images}
                />
            );
        }
        return listItems;
    }

    constructor(props) {
        super(props);
        this.state = { projectList: [] };
        this.getProjects = this.getProjects.bind(this);
        this.parseProjects = this.parseProjects.bind(this);
        this.getAsList = this.getAsList.bind(this);
        setTimeout(this.getProjects, 1);
    }

    render() {
        return (
            <div className="aboutPage">
                <Link to="/" className="backButton" align="center" style={{ textDecoration: "none" }}>
                    Back
                </Link>

                <header align="center">
                    <h1>
                        Hello, my name is <strong>Mehul Pillai</strong>...
                    </h1>
                    <h2>I am an aspiring computer scientist who loves to build applications and solve problems.</h2>
                    <h2>Check out some of my projects below</h2>
                    <hr />
                </header>

                <main>
                    <CardDeck align="center" className="cardList" style={{ marginLeft: "1%", marginRight: "1%" }}>
                        {this.getAsList()}
                    </CardDeck>
                </main>
            </div>
        );
    }
}
