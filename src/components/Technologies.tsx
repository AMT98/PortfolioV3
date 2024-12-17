import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TypingText } from "./CustomTexts";

const Technologies: React.FC = () => {
  const staggerVariants = staggerContainer(0.1, 0.2);
  return (
    <section className="bg-white py-8">
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-2 pt-4 pb-12 text-gray-800"
      >
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary-black">
          <TypingText
            title="| Technologies"
            textStyles="text-center text-primary-black"
          />
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
                Front-end Development{" "}
              </div>
              <ul className="w-full text-center text-base font-bold">
                <li className="border-b py-4 flex hover:text-primaryColor items-center justify-center">
                  <span className="mr-2">🌐</span> HTML5
                </li>
                <li className="border-b py-4 flex hover:text-primaryColor items-center justify-center">
                  <span className="mr-2">🎨</span> CSS
                </li>
                <li className="border-b py-4 flex hover:text-primaryColor items-center justify-center">
                  <span className="mr-2">💨</span> TailwindCSS
                </li>
                <li className="border-b py-4 flex hover:text-primaryColor items-center justify-center">
                  <span className="mr-2">📜</span> JavaScript
                </li>
                <li className="border-b py-4 flex hover:text-primaryColor items-center justify-center">
                  <span className="mr-2">📘</span> TypeScript
                </li>
                <li className="border-b py-4 hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🔄</span> Redux
                </li>
                <li className="border-b py-4 flex hover:text-primaryColor items-center justify-center">
                  <span className="mr-2">⚛️</span> ReactJS
                </li>
                <li className="border-b py-4 flex hover:text-primaryColor items-center justify-center">
                  <span className="mr-2">🚀</span> NextJS
                </li>
                <li className="py-4 flex items-center justify-center hover:text-primaryColor">
                  <span className="mr-2">⚡</span> Vite
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg text-black mt-4 sm:-mt-6 shadow-lg z-10 overflow-hidden">
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div className="w-full p-8 text-3xl font-bold text-center border-b-4 border-gray-300 rounded-md">
                Software and Tools
              </div>
              <div className="h-1 w-full font-bold my-0 py-0 rounded-t"></div>

              <ul className="w-full text-center text-base font-bold">
                <li className="border-b py-4 hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🔧</span> Git
                </li>
                <li className="border-b py-4 hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🐙</span> GitHub
                </li>
                <li className="border-b py-4 hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🌐</span> Google
                </li>
                <li className="border-b py-4 hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">💡</span> Stack Overflow
                </li>
                <li className="border-b py-4 hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🤖</span> ChatGPT
                </li>
                <li className="border-b py-4 hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">📬</span> Postman
                </li>
                <li className="border-b py-4 hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🛠️</span> Insomnia
                </li>
                <li className="border-b py-4 hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">💻</span> Visual Studio Code
                </li>
                <li className="py-4 flex hover:text-primaryColor items-center justify-center">
                  <span className="mr-2">🛠️</span> Visual Studio
                </li>
              </ul>
              <div className="flex items-center justify-center"></div>
            </motion.div>
          </div>

          <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div className="p-8 text-3xl font-bold text-center border-b-4 border-gray-300 rounded-t-md">
                Back-End Development
              </div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4 font-bold hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🚀</span> Ruby on Rails
                </li>
                <li className="border-b py-4 font-bold hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🐘</span> PostgreSQL
                </li>
                <li className="border-b py-4 font-bold hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🌐</span> Node.JS
                </li>
                <li className="border-b py-4 font-bold hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🔗</span> Express
                </li>
                <li className="border-b py-4 font-bold hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">📡</span> RESTful API Design
                </li>
                <li className="border-b py-4 font-bold hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🔐</span> OAuth
                </li>
                <li className="py-4 font-bold hover:text-primaryColor flex items-center justify-center">
                  <span className="mr-2">🛡️</span> JWT
                </li>
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
  );
};

export default Technologies;
