import "./About.css";
import React from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { apiKey, projectsEndpoint } from "../Consts";

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
        fetch(projectsEndpoint, {
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
        if (projectArr.length === 0) {
            return (
                <li>
                    <h3>Please Wait..</h3>
                </li>
            );
        }

        for (let i = 0; i < projectArr.length; i++) {
            listItems.push(
                <li key={`project_${i}`}>
                    <ProjectCard
                        title={projectArr[i].title}
                        subtitle={projectArr[i].subtitle}
                        description={projectArr[i].description}
                        info={projectArr[i].info}
                        features={projectArr[i].features}
                        images={projectArr[i].images}
                    />
                </li>
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
                    <center>
                        <ul>{this.getAsList()}</ul>
                    </center>
                </main>
                <Skills />
                <Footer />
            </div>
        );
    }
}
