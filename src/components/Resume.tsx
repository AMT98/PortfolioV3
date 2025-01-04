import React from "react";
import About from "./About";

const Resume: React.FC = () => {
  return (
    <>
      <About
        title="View My"
        titleHighlight="Resume"
        description="        I’ve curated my resume to highlight my skills, experience, and the
        projects I’ve worked on. If you’re interested in seeing more about my
        background and how I can contribute to your team, feel free to download
        or view my resume."
      />
      {/* aswinmalla to AswinMalla */}
      <div className="flex flex-col justify-center items-center h-screen mt-24">
        <div className="rounded-xl flex gap-3 p-2 ">
          <a
            href="/AswinMalla_Resume.pdf"
            download
            target="_blank"
            title="Download resume"
            className="text-white font-bold border pb-6 hover:text-gray-900 hover:animate-pulse rounded-full border-transparent flex bg-indigo-500 p-4 m-2"
          >
            Download Resume
          </a>
        </div>
        <iframe
          src="AswinMalla_Resume.pdf"
          title="Resume"
          className="hidden md:block w-full sm:w-3/4 md:w-2/3 lg:w-full h-full border rounded-lg shadow-lg"
        />
      </div>
    </>
  );
};

export default Resume;
