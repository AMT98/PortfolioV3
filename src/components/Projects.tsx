import React, { useState, useEffect } from "react";
import { projectData } from "../assets/data/projectData";
import Modal from "../utils/Modal";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TypingText } from "./CustomTexts";


const Projects: React.FC = () => {
  const [nextItems, setNextItems] = useState(3);
  const [projects, setProjects] = useState(projectData);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState<string | boolean | null>(null);
  const staggerVariants = staggerContainer(0.1, 0.2);

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
      <section className="bg-white py-8">
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="container mx-auto px-2 pt-4 pb-12 text-gray-800"
        >
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primaryColor">
            <TypingText title="| Technologies" textStyles="text-center" />
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-primaryColor w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4 ">
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg  mt-4">
              <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                className="flex-1 text-gray-600 rounded-t rounded-b-none overflow-hidden shadow-xl"
              >
                <div className="p-8 text-3xl font-bold text-center border-b-4  rounded-md">
                  Back-End Development
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4 font-bold">Ruby on Rails </li>
                  <li className="border-b py-4 font-bold">PostgreSQL</li>
                  <li className="border-b py-4 font-bold">Node.JS</li>
                  <li className="border-b py-4 font-bold">Express</li>
                  <li className="border-b py-4 font-bold">C#</li>
                  <li className="border-b py-4 font-bold">.NET</li>
                </ul>
              </motion.div>
            </div>

            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg text-black mt-4 sm:-mt-6 shadow-lg z-10">
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
              >
                <div className="w-full p-8 text-3xl font-bold text-center border-b-4 rounded-md">
                  Software and Tools
                </div>
                <div className="h-1 w-full font-bold my-0 py-0 rounded-t"></div>

                <ul className="w-full text-center text-base font-bold">
                  <li className="border-b py-4 font-bold">Git</li>
                  <li className="border-b py-4 font-bold">Github</li>
                  <li className="border-b py-4 font-bold">Google</li>
                  <li className="border-b py-4 font-bold">Stack Overflow</li>
                  <li className="border-b py-4 font-bold">ChatGPT</li>
                  <li className="border-b py-4 font-bold">
                    Visual Studio Code
                  </li>
                  <li className="border-b py-4 font-bold">Visual Studio</li>
                </ul>
                <div className="flex items-center justify-center"></div>
              </motion.div>
            </div>

            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <motion.div
                variants={fadeIn("left", "tween", 0.2, 1)}
                className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
              >
                <div className="p-8 text-3xl font-bold text-center border-b-4  rounded-md">
                  Front-end Development{" "}
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4 font-bold">HTML5</li>
                  <li className="border-b py-4 font-bold">CSS</li>
                  <li className="border-b py-4 font-bold">TailwindCSS</li>
                  <li className="border-b py-4 font-bold">JavaScript</li>
                  <li className="border-b py-4 font-bold">TypeScript</li>
                  <li className="border-b py-4 font-bold">ReactJs</li>
                  <li className="border-b py-4 font-bold">NextJS</li>
                  <li className="border-b py-4 font-bold">Vite</li>
                </ul>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      </section>
      <div className="container mt-12 min-h-screen">
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
