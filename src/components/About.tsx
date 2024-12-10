import React from "react";

const About = () => {
  return (
    <div className="p-6 mt-12 shadow-[rgba(0,0,0,0.5)_0px_1px_0px_0px]">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
        Creative Quadrilingual Developer
      </h2>
      <p className="text-gray-800 leading-relaxed text-justify mb-4">
        I’m a creative <span className="font-bold italic">𝐪𝐮𝐚𝐝𝐫𝐢𝐥𝐢𝐧𝐠𝐮𝐚𝐥</span>{" "}
        developer with experience working with the
        <span className="text-indigo-500 font-medium"> PERN stack</span>{" "}
        (PostgreSQL, Express.js, React.js, and Node.js). In my work, I aspire to
        be an ideal amalgamation of two things:
      </p>
      <ul className="list-inside text-gray-800 leading-relaxed">
        <li>
          <span className="font-medium text-indigo-600">
            ① Technical skills:
          </span>{" "}
          Staying current with emerging web development technologies.
        </li>
        <li>
          <span className="font-medium text-indigo-600">② Soft skills:</span>{" "}
          Making a difference through complex problem-solving, active learning,
          and critical thinking.
        </li>
      </ul>
      <p className="text-gray-800 leading-relaxed text-justify mt-4">
        I have a{" "}
        <span className="text-indigo-600 font-medium">growth ⇧ mindset</span>,
        have worked in various cross-cultural settings, and have developed a
        holistic approach to writing code and coming up with creative tech
        solutions. Passionate about learning new technologies, bringing ideas to
        life, and working in teams to build efficient and robust applications
        that enhance client satisfaction, experience, and loyalty.
      </p>
    </div>
  );
};

export default About;
