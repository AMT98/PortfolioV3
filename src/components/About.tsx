import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion.tsx";

interface AboutProps {
  title: string;
  description: string;
  titleHighlight?: string;
}

const About: React.FC<AboutProps> = ({
  title,
  description,
  titleHighlight,
}) => {
  const staggerVariants = staggerContainer(0.1, 0.2);

  return (
    <motion.div
      variants={staggerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`p-6 mt-12 shadow-[rgba(0,0,0,0.5)_0px_1px_0px_0px]`}
    >
      <h1 className="text-2xl font-bold text-primary-black mb-4 text-center">
        <span className="italic">{title}</span>{" "}
        <span className="font-bold italic text-primaryColor">
          {titleHighlight}
        </span>
      </h1>
      <p className="text-gray-800 leading-relaxed mb-4">{description}</p>
    </motion.div>
  );
};

export default About;
