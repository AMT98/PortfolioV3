import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";
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
      <h1 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
        <TypingText
          title="| Creative Developer"
          textStyles="text-center text-primary-black"
        />
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-primaryColor w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <p className="text-gray-800 leading-relaxed text-justify mb-4">
        <span className="italic">I</span> am a versatile{" "}
        <span className="font-bold italic text-primaryColor">
          full-stack developer
        </span>{" "}
        with a passion for leveraging cutting-edge technologies to create
        innovative web solutions. Experienced in the
        <span className="text-primaryColor font-bold"> PERN stack</span> I
        strive to combine strong technical expertise with effective soft skills
        to drive impactful results. My approach is rooted in continuous
        learning, critical thinking, and problem-solving. With a growth mindset
        and experience working in diverse teams, I focus on delivering
        high-quality applications that enhance user experience, client
        satisfaction, and business success.
      </p>
    </motion.div>
  );
};

export default About;
