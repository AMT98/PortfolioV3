import React from "react";
import AboutResume from "./AboutResume";

const Resume: React.FC = () => {
  return (
    <>
      <AboutResume />
      <div className="flex flex-col justify-center items-center h-screen mt-24">
        <div className="rounded-xl flex gap-3 p-2 ">
          <a
            href="/aswinmalla_resume.pdf"
            download
            target="_blank"
            title="Download resume"
            className="text-white font-bold border pb-6 hover:text-gray-900 hover:animate-pulse rounded-full border-transparent flex bg-indigo-500 p-4 m-2"
          >
            Download Resume
          </a>
        </div>
        <iframe
          src="aswinmalla_resume.pdf"
          title="Resume"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-full h-full border rounded-lg shadow-lg"
        />
      </div>
    </>
  );
};

export default Resume;
