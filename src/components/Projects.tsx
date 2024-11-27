import React from "react";
import projectData from "../assets/data/projectData";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              All
            </button>
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              Frontend Development
            </button>
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              Fullstack Development
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-12"></div>
      </div>
    </section>
  );
};

export default Projects;
