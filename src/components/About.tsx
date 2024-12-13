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
        <span className="italic">Creative</span>{" "}
        <span className="font-bold italic text-primaryColor">Developer </span>{" "}
      </h1>
      <p className="text-gray-800 leading-relaxed text-justify mb-4">
        <span className="italic">I</span> am a{" "}
        <span className="font-bold italic text-primaryColor">developer</span>{" "}
        passionate about crafting innovative web solutions by leveraging
        emerging technologies. My career is built on a strong foundation of
        technical expertise combined with effective collaboration and
        problem-solving skills. Throughout my journey, I have honed my ability
        to drive impactful results through continuous learning and critical
        thinking. With diverse experience across different teams, I focus on
        delivering high-quality applications that improve user experiences and
        contribute to business success.
      </p>
    </motion.div>
  );
};

export default About;
