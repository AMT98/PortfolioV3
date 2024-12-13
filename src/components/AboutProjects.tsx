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
        <span className="italic">Exploring Innovation</span>{" "}
        <span className="font-bold italic text-primaryColor">
          Through Projects{" "}
        </span>{" "}
      </h1>
      <p className="text-gray-800 leading-relaxed text-justify mb-4">
        In my personal projects, I focus on leveraging emerging technologies to
        build functional and innovative web applications. These projects allow
        me to explore new tools and frameworks while honing my skills and
        pushing the boundaries of what’s possible. Whether working solo or
        experimenting with collaborative features, each project serves as an
        opportunity to learn, innovate, and create solutions that are both
        practical and engaging. My approach is rooted in continuous improvement,
        creativity, and a passion for technology, ensuring that every project I
        work on is both a learning experience and a showcase of my technical
        growth.
      </p>
    </motion.div>
  );
};

export default About;
