import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion.tsx";
import About from "./About.tsx";
import { TypingText } from "./CustomTexts";
import { staggerContainer } from "../utils/motion.tsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  jobTitle,
  company,
  duration,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2"
        onClick={(e) => e.stopPropagation()} // Prevent modal closing on clicking inside
      >
        <h3 className="text-xl font-bold">{jobTitle}</h3>
        <p className="text-sm text-gray-600">{company}</p>
        <span className="block text-sm text-gray-500">{duration}</span>
        <p className="mt-4">{description}</p>
        <button
          className="mt-4 px-4 py-2 bg-primaryColor text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Career: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<{
    jobTitle: string;
    company: string;
    duration: string;
    description: string;
  }>({
    jobTitle: "",
    company: "",
    duration: "",
    description: "",
  });
  const leftSlideInVariants = slideIn("left", "tween", 0.2, 1);
  const rightSlideInVariants = slideIn("right", "tween", 0.3, 1);
  const staggerVariants = staggerContainer(0.1, 0.2);

  const handleCardClick = (
    jobTitle: string,
    company: string,
    duration: string,
    description: string
  ) => {
    setModalContent({ jobTitle, company, duration, description });
    setModalOpen(true);
  };

  return (
    <section id="career">
      <About
        title="Creative"
        description="I am a developer
        passionate about crafting innovative web solutions by leveraging
        emerging technologies. My career is built on a strong foundation of
        technical expertise combined with effective collaboration and
        problem-solving skills. Throughout my journey, I have honed my ability
        to drive impactful results through continuous learning and critical
        thinking. With diverse experience across different teams, I focus on
        delivering high-quality applications that improve user experiences and
        contribute to business success."
        titleHighlight="Developer"
      />
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
                <div
                  className="flex items-center flex-col sm:flex-row cursor-pointer"
                  onClick={() =>
                    handleCardClick(
                      "Web Developer",
                      "Ascent Classical Academies",
                      "October 2023 - Present",
                      "Managed and maintained over 10 school websites, optimizing performance, ensuring a seamless user experience, and providing timely updates across all platforms. Integrated third-party tools and APIs, including Zapier and Google Analytics, to automate workflows, enhance website functionality, and support data-driven decision-making."
                    )
                  }
                >
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
                <div
                  className="flex items-center flex-col sm:flex-row cursor-pointer"
                  onClick={() =>
                    handleCardClick(
                      "Software Engineer",
                      "echowin",
                      "October 2022 - October 2023",
                      "Engineered dynamic navigation menu components for Echowin using Next.js, TypeScript, SASS, and CMS, enhancing user experience and site interactivity. Collaborated with a cross-functional team of 7 to revamp and optimize the website's UI and layout, improving visual appeal and usability."
                    )
                  }
                >
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
                <div
                  className="flex items-center flex-col sm:flex-row cursor-pointer"
                  onClick={() =>
                    handleCardClick(
                      "Web Developer",
                      "Namaste Transportation",
                      "January 2021 - October 2022",
                      "Managed and maintained the company website, ensuring accurate, up-to-date content and optimizing it for search engines, which improved SEO performance. Led a comprehensive website redesign that enhanced user experience and resulted in a 58% increase in website traffic."
                    )
                  }
                >
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
      {/* Modal Component */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle={modalContent.jobTitle}
        company={modalContent.company}
        duration={modalContent.duration}
        description={modalContent.description}
      />
    </section>
  );
};

export default Career;
