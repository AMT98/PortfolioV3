import React from "react";
import CountUp from "react-countup";


const Career = () => {
  return (
    <section id="timeline">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Work History
          </h2>
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
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:flex-row">
                      <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ">
                          Web Developer
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Ascent Classical Academies
                        </p>
                          <span className="font-[500]"> Ocotober 2023 - Present</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-gray-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <i className="ri-code-s-slash-line"></i>
                    </figure>
                  </div>
                </div>
              </div>
              {/* right card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:flex-row">
                      <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ">
                          Software Engineer
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          echowin
                        </p>
                        <span className="font-[500]">Ocotober 2022 - Ocotober 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-gray-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <i className="ri-code-s-slash-line"></i>
                    </figure>
                  </div>
                </div>
              </div>
                            {/* left card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:flex-row">
                      <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ">
                          Web Developer
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Namaste Transportation
                        </p>
                          <span className="font-[500]">January 2021 - Ocotober 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-gray-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <i className="ri-code-s-slash-line"></i>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
