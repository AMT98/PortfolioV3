import React from "react";
import heroImg from "../assets/A.m.jpg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0 id='about'">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* =====hero left content ====== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello
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
                  <i className="ri-mail-line">Contact Me</i>
                </button>
              </a>
              <a
                href="#projects"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Projects
              </a>
            </div>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
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
              <CountUp start={0} end={100} duration={2} suffix="%" />
            </h2>
            <h4 className="text-headingColor font-[600] text-[18px]">
              Client Satisfaction
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
