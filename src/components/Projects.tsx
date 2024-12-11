import React, { useState, useEffect } from "react";
import { projectData } from "../assets/data/projectData";
import Modal from "../utils/Modal";

const Projects: React.FC = () => {
  const [nextItems, setNextItems] = useState(3);
  const [projects, setProjects] = useState(projectData);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState<string | boolean | null>(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };
  const showModalHandler = (id: string | boolean | null) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setProjects(projectData);
    }
    if (selectTab === "frontend development") {
      const filteredData = projectData.filter(
        (item) => item.category === "Frontend Development"
      );
      setProjects(filteredData);
    }
    if (selectTab === "fullstack development") {
      const filteredData = projectData.filter(
        (item) => item.category === "Fullstack Development"
      );
      setProjects(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="projects">
      <div className="container mt-24 min-h-screen">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-white bg-primaryColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("fullstack development")}
              className="text-white bg-primaryColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Fullstack Development
            </button>
            <button
              onClick={() => setSelectTab("frontend development")}
              className="text-white bg-primaryColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Frontend Development
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-12">
          {projects.slice(0, nextItems)?.map((project, index) => (
            <div
              key={index}
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] cursor-pointer"
              onClick={() => showModalHandler(project.id)}
            >
              <figure>
                <img
                  className="rounded-[8px]"
                  src={project.imgUrl}
                  alt="projectImage"
                />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(project.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < projects.length && projectData.length > 3 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal activeID={activeID} setShowModal={setShowModal} />}
    </section>
  );
};

export default Projects;
