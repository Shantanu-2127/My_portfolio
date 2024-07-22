import React from "react";
import "./projects.css";
import Project from "../common/projects/projects";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Projects</h2>
      <span className="projectsDesc">
        Each project is a unique piece of development 🧩
      </span>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
