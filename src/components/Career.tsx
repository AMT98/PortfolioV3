import { motion } from "framer-motion";
import { slideIn } from "../utils/motion.tsx";
import About from "./AboutCareer.tsx";
import { TypingText } from "./CustomTexts";
import { staggerContainer } from "../utils/motion.tsx";

const Career = () => {
  const leftSlideInVariants = slideIn("left", "tween", 0.2, 1);
  const rightSlideInVariants = slideIn("right", "tween", 0.3, 1);
  const staggerVariants = staggerContainer(0.1, 0.2);

  return (
    <section id="career">
      <About />
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container lg:pt-5 mt-12 min-h-screen"
      >
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            <TypingText
              title="| Work History"
              textStyles="text-center text-primary-black"
            />
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-primaryColor w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Here’s a glimpse into my professional journey and growth as a
            developer.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm: max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm text-semibold">
              {/* vertival line through middle */}
              <div className="hidden absolute w-1 sm:block bg-indigo-500 h-full left-1/2 transform -translate-x-1/2"></div>
              {/* left card */}
              <motion.div
                variants={leftSlideInVariants}
                initial="hidden"
                animate="show"
                className="mt-6 sm:mt-0 sm:mb-12"
              >
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:flex-row">
                      <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ">
                          Web Developer
                        </h3>
                        <p className="text-[15px] text-smallTextColor font-bold group-hover:text-white group-hover:font-[500] leading-7">
                          Ascent Classical Academies
                        </p>
                        <span className="font-[500]">
                          {" "}
                          October 2023 - Present
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-gray-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <i className="ri-code-s-slash-line"></i>
                    </figure>
                  </div>
                </div>
              </motion.div>
              {/* right card */}
              <motion.div
                variants={rightSlideInVariants}
                initial="hidden"
                animate="show"
                className="mt-6 sm:mt-0 sm:mb-12"
              >
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:flex-row">
                      <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <h3 className="text-primaryColor font-[700]  mb-3 group-hover:text-white group-hover:font-[600] text-2xl ">
                          Software Engineer
                        </h3>
                        <p className="text-[15px] text-smallTextColor font-bold group-hover:text-white group-hover:font-[500] leading-7">
                          echowin
                        </p>
                        <span className="font-[500]">
                          Ocotober 2022 - Ocotober 2023
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-gray-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <i className="ri-code-s-slash-line"></i>
                    </figure>
                  </div>
                </div>
              </motion.div>
              {/* left card */}
              <motion.div
                variants={leftSlideInVariants}
                initial="hidden"
                animate="show"
                className="mt-6 sm:mt-0 sm:mb-12"
              >
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:flex-row">
                      <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ">
                          Web Developer
                        </h3>
                        <p className="text-[15px] text-smallTextColor font-bold group-hover:text-white group-hover:font-[500] leading-7">
                          Namaste Transportation
                        </p>
                        <span className="font-[500]">
                          January 2021 - Ocotober 2022
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-gray-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <i className="ri-code-s-slash-line"></i>
                    </figure>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Career;
