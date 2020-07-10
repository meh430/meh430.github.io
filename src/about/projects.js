import "./About.css";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Skills } from "./Skills";
import { Heading } from "./heading";
import { data } from "./data";

export class Projects extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <Heading
                    dark={this.props.dark}
                    line1="I find learning by doing to be a lot more effective than reading from a textbook."
                    line2="To that end, I've worked on some things to improve my skills. Check out some of my projects below."
                />
                <main style={{ width: "75%" }}>
                    <ul>
                        {data.projects.map((project, index) => {
                            return (
                                <li key={`li_${index}`}>
                                    <ProjectCard
                                        key={`card_${index}`}
                                        dark={this.props.dark}
                                        title={project.title}
                                        tech={project.tech}
                                        brief={project.brief}
                                        description={project.description}
                                        repo={project.repo}
                                        features={project.features}
                                        images={project.images}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </main>
                <Skills dark={this.props.dark} />
            </div>
        );
    }
}
