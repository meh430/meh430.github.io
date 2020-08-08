import "./About.css";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Skills } from "./Skills";
import { Heading } from "./Heading";
import { data } from "./Data";

export const Projects = (props) => {
    return (
        <div className="projectPage">
            <Heading
                dark={props.dark}
                line1="I find learning by doing to be a lot more effective than reading from a textbook."
                line2="To that end, I've worked on some things to improve my skills. Check out some of my projects below."
            />
            <main style={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <ul style={{listStyleType: "none", margin: "0px", padding: "0px", width: "fit-content", textAlign: "center"}}>
                    {data.projects.map((project, index) => {
                        return (
                            <li key={`li_${index}`} style={{ margin: "10px", display: "inline-block"}}>
                                <ProjectCard
                                    key={`card_${index}`}
                                    dark={props.dark}
                                    title={project.title}
                                    tech={project.tech}
                                    brief={project.brief}
                                    repo={project.repo}
                                    features={project.features}
                                    images={project.images}
                                />
                            </li>
                        );
                    })}
                </ul>
            </main>
            <Skills dark={props.dark} />
        </div>
    );
};
