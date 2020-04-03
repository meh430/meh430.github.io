import "./About.css";
import React from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";

//title, subtitle, desc, link, image links?
const projectFactory = (title, subtitle, desc) => {
    return {
        title: title,
        subtitle: subtitle,
        desc: desc,
    };
};
const projectArr = [
    projectFactory("Project 1", "this is a project", "this does stuff"),
    projectFactory("Project 2", "this is a project", "this does stuff"),
    projectFactory("Project 3", "this is a project", "this does stuff"),
    projectFactory("Project 4", "this is a project", "this does stuff"),
    projectFactory("Project 5", "this is a project", "this does stuff"),
    projectFactory("Project 6", "this is a project", "this does stuff"),
    projectFactory("Project 7", "this is a project", "this does stuff"),
    projectFactory("Project 8", "this is a project", "this does stuff"),
    projectFactory("Project 9", "this is a project", "this does stuff"),
    projectFactory("Project 10", "this is a project", "this does stuff"),
];

const getAsList = () => {
    let listItems = [];
    for (let i = 0; i < projectArr.length; i++) {
        listItems.push(
            <li key={`project_${i}`}>
                <ProjectCard title={projectArr[i].title} subtitle={projectArr[i].subtitle} desc={projectArr[i].desc} />
            </li>
        );
    }
    return listItems;
};

export class About extends React.Component {
    render() {
        console.log("got here");
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
                    <ul align="center">{getAsList()}</ul>
                </main>
            </div>
        );
    }
}
