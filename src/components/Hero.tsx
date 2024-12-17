import React, { useState } from "react";
import heroImg from "/A.m.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";
import Technologies from "./Technologies";
import Countup from "./Countup";

const Hero: React.FC = () => {
  const staggerVariants = staggerContainer(0.1, 0.2);
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div className="min-h-screen">
      <section className=" pt-0 mt-8 " id="hero">
        <div className="container pt-14">
          <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
            {/* =====hero left content ====== */}
            <div className="w-full md:basis-1/2">
              <h5 className="text-headingColor font-[600] text-[16px]">
                <span className="wave">👋</span>
              </h5>
              <motion.h1
                variants={staggerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
              >
                I'm Aswin Malla
                <br />
                <TypingText
                  title="Software Engineer"
                  textStyles="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
                />
              </motion.h1>

              <span>
                <p
                  className={`cursor-pointer hover:text-primaryColor transition-transform duration-500 ${
                    isRotating ? "animate-spin" : ""
                  }`}
                  onClick={handleClick}
                >
                  <i className="ri-apps-2-line"></i>
                </p>
              </span>
              <p className="text-headingColor mt-6 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
                A{" "}
                <span className="font-bold italic text-primaryColor">
                  full-stack developer
                </span>{" "}
                with a strong background in building efficient and reliable web
                applications. Experienced in creating user-focused solutions
                using modern technologies and frameworks. Adept at writing
                clean, maintainable code and collaborating with teams to drive
                projects forward. Passionate about problem-solving, optimizing
                performance, and delivering exceptional user experiences.
              </p>
              <div className="flex items-center justify-center gap-6 mt-7">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:shadow-md hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <Link to="/contact">
                    <i className="ri-mail-line">Let's Connect</i>
                  </Link>
                </button>
                <Link
                  to="/projects"
                  className="text-smallTextColor font-[600] text-[16px] border-b hover:text-primaryColor hover:shadow-md border-solid border-smallTextColor"
                >
                  View My Work
                </Link>
              </div>
              <div className="flex items-center gap-9 mt-14">
                <span className="w-12 h-px bg-gray-900"></span>
                <span>
                  <a
                    href="https://www.github.com/AMT98"
                    title="Github"
                    target="_blank"
                    className="text-smallTextColor text-[15px] font-[600]"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/aswinmalla/"
                    target="_blank"
                    title="Linkedin"
                    className="text-smallTextColor text-[15px] font-[600]"
                  >
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                </span>
                <span>
                  <Link
                    to="/resume"
                    title="Resume"
                    className="text-smallTextColor text-[15px] font-[600]"
                  >
                    <i className="ri-mail-send-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
            <div className="basis-1/3 m-10 sm:mt-0 border rounded-full overflow-hidden">
              <figure className="flex items-center justify-center">
                <img
                  src={heroImg}
                  alt="profilePicture"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Countup />
      <Technologies />
    </div>
  );
};

export default Hero;
