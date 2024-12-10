import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";
import { staggerContainer } from "../utils/motion.tsx";

const About = () => {
  const staggerVariants = staggerContainer(0.1, 0.2);
  return (
    <motion.div
      variants={staggerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="p-6 mt-12 shadow-[rgba(0,0,0,0.5)_0px_1px_0px_0px]"
    >
      <h1 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
        <TypingText
          title="| Creative Developer"
          textStyles="text-center"
        />
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-primaryColor w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
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
    </motion.div>
  );
};

export default About;
