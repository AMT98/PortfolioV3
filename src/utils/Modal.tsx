import React, { Dispatch, SetStateAction } from "react";
import { projectData } from "../assets/data/projectData";

interface ModalProps {
  activeId: string | boolean | null;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ activeId, setShowModal }) => {
  const project = projectData.find((project) => project.id === activeId);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div
      onClick={handleClose}
      className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5"
      >
        <div>
          <figure>
            <img
              className="rounded-[8px]"
              src={project?.imgUrl}
              alt="projectImage"
            />
          </figure>
        </div>
        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {project?.title}
          </h2>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] text-[700]">
              Technologies:
            </h4>

            {project?.technologies.map((item, index) => (
              <span
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-2 items-center justify-center">
            <a href={project?.liveSite}>
              <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                Live Site
              </button>
            </a>
            <a href={project?.github}>
              <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                Github
              </button>
            </a>
          </div>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="overflow-hidden w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
