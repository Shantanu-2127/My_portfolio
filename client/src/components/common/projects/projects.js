import React from "react";
import { FaGlobe, FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  return (
    <div className="flex flex-wrap mb-10">
      <div className="w-full md:w-1/2 p-4">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center gap-2">
        <h3 className="text-2xl font-semibold text-left">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
        <p
          className="text-gray-200 flex text-justify"
        >
          {project.content}
        </p>
        <div className="mt-4 flex space-x-4">
          {project.website && (
            <a
              href={project.website}
              className="bg-blue-500 text-white px-3 py-1 rounded flex items-center space-x-2 hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe />
              <span>Website</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="bg-gray-800 text-white px-3 py-1 rounded flex items-center space-x-2 hover:bg-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
