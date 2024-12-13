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
        <span className="italic">Let’s</span>{" "}
        <span className="font-bold italic text-primaryColor">Connect </span>{" "}
      </h1>
      <p className="text-gray-800 leading-relaxed mb-4">
        I’d love to hear from you! Whether you’re interested in discussing a
        potential project, sharing ideas, or simply want to chat about
        technology, feel free to reach out. I’m always open to new opportunities
        and collaborations.
      </p>
    </motion.div>
  );
};

export default About;
