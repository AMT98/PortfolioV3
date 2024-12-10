import React from "react";
import heroImg from "/A.m.jpg";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className="pt-0 mt-8 min-h-screen" id="hero">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* =====hero left content ====== */}
          <div className="w-full md:basis-1/2">
            <h5 className="text-headingColor font-[600] text-[16px]">
              <span className="wave">👋</span>
            </h5>
            <h1 className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
              I'm Aswin Malla
              <br /> Software Engineer{" "}
            </h1>

            <p className="flex gap-2 text-headingColor mt-6 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              I am a full-stack developer with experience working with the PERN
              stack(PostgreSQL, Express, React, and Node.js). I have a passion
              for creating efficient and visually pleasing web applications.{" "}
            </p>
            <div className="flex items-center justify-center gap-6 mt-7">
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <Link to="/contact">
                    <i className="ri-mail-line">Contact Me</i>
                  </Link>
                </button>
              </a>
              <Link
                to="/projects"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Projects
              </Link>
            </div>
            <div className="flex items-center gap-9 mt-14">
              <span className="w-12 h-px bg-gray-900"></span>
              <span>
                <a
                  href="#"
                  className="text-smallTextColor text-[15px] font-[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-smallTextColor text-[15px] font-[600]"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-smallTextColor text-[15px] font-[600]"
                >
                  <i className="ri-mail-send-fill"></i>
                </a>
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
        <div className="flex flex-row gap-10 justify-center items-center mt-12">
          <div className="mb-10">
            <h2 className="text-headingColor font-[700] text-[32px]">
              <CountUp start={0} end={4} duration={2} suffix="+" />
            </h2>
            <h4 className="text-headingColor font-[600] text-[18px]">
              Years of Experience
            </h4>
          </div>
          <div className="mb-10">
            <h2 className="text-headingColor font-[700] text-[32px]">
              <CountUp start={0} end={100} duration={2} suffix="%" />
            </h2>
            <h4 className="text-headingColor font-[600] text-[18px]">
              Team Player
            </h4>
          </div>
          <div className="mb-10">
            <h2 className="text-headingColor font-[700] text-[32px]">
              <CountUp start={0} end={1000} duration={2} suffix="+" />
            </h2>
            <h4 className="text-headingColor font-[600] text-[18px]">
              Github Commits
            </h4>
          </div>
          <div className="mb-10">
            <h2 className="text-headingColor font-[700] text-[32px]">
              <CountUp start={0} end={100} duration={2} suffix="%" />
            </h2>
            <h4 className="text-headingColor font-[600] text-[18px]">
              Client Satisfaction
            </h4>
          </div>
        </div>
      </div>
      <section className="bg-white py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="container mx-auto px-2 pt-4 pb-12 text-gray-800"
        >
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primaryColor">
            Technologies
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-primaryColor w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4 ">
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg  mt-4">
              <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                className="flex-1 text-gray-600 rounded-t rounded-b-none overflow-hidden shadow-xl"
              >
                <div className="p-8 text-3xl font-bold text-center border-b-4  rounded-md">
                  Back-End Development
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4 font-bold">Ruby on Rails </li>
                  <li className="border-b py-4 font-bold">PostgreSQL</li>
                  <li className="border-b py-4 font-bold">Node.JS</li>
                  <li className="border-b py-4 font-bold">Express</li>
                  <li className="border-b py-4 font-bold">C#</li>
                  <li className="border-b py-4 font-bold">.NET</li>
                </ul>
              </motion.div>
            </div>

            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg text-black mt-4 sm:-mt-6 shadow-lg z-10">
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
              >
                <div className="w-full p-8 text-3xl font-bold text-center border-b-4 rounded-md">
                  Software and Tools
                </div>
                <div className="h-1 w-full font-bold my-0 py-0 rounded-t"></div>

                <ul className="w-full text-center text-base font-bold">
                  <li className="border-b py-4 font-bold">Git</li>
                  <li className="border-b py-4 font-bold">Github</li>
                  <li className="border-b py-4 font-bold">Google</li>
                  <li className="border-b py-4 font-bold">Stack Overflow</li>
                  <li className="border-b py-4 font-bold">ChatGPT</li>
                  <li className="border-b py-4 font-bold">
                    Visual Studio Code
                  </li>
                  <li className="border-b py-4 font-bold">Visual Studio</li>
                </ul>
                <div className="flex items-center justify-center">
                  <Link to="/projects">
                    <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] mt-12">
                      View Projects
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <motion.div
                variants={fadeIn("left", "tween", 0.2, 1)}
                className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
              >
                <div className="p-8 text-3xl font-bold text-center border-b-4  rounded-md">
                  Front-end Development{" "}
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4 font-bold">HTML5</li>
                  <li className="border-b py-4 font-bold">CSS</li>
                  <li className="border-b py-4 font-bold">JavaScript</li>
                  <li className="border-b py-4 font-bold">TypeScript</li>
                  <li className="border-b py-4 font-bold">ReactJs</li>
                  <li className="border-b py-4 font-bold">NextJS</li>
                  <li className="border-b py-4 font-bold">Vite</li>
                  <li className="border-b py-4 font-bold">TailwindCSS</li>
                </ul>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
