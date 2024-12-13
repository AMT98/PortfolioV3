import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion.tsx";

const About: React.FC = () => {
  const staggerVariants = staggerContainer(0.1, 0.2);
  return (
    <motion.div
      variants={staggerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="p-6 mt-12 shadow-[rgba(0,0,0,0.5)_0px_1px_0px_0px]"
    >
      <h1 className="text-2xl font-bold text-primary-black mb-4 text-center">
        <span className="italic">View My </span>{" "}
        <span className="font-bold italic text-primaryColor">Resume </span>{" "}
      </h1>
      <p className="text-gray-800 leading-relaxed text-justify mb-4">
        I’ve curated my resume to highlight my skills, experience, and the
        projects I’ve worked on. If you’re interested in seeing more about my
        background and how I can contribute to your team, feel free to download
        or view my resume.
      </p>
      
    </motion.div>
  );
};

export default About;
