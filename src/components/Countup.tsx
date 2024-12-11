import React from "react";

import CountUp from "react-countup";

const Countup = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-4 mt-12">
        <div className="flex gap-4">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            {/* <h2 className="text-gray-500 font-medium text-sm">
              
              </h2> */}
            <p className="text-2xl font-bold">
              <CountUp start={0} end={4} duration={2} suffix="+" />
            </p>
            <span className="text-gray-400 text-sm mt-1">
              Years of Experience
            </span>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            {/* <h2 className="text-gray-500 font-medium text-sm">
                
              </h2> */}
            <p className="text-2xl font-bold">
              <CountUp start={0} end={100} duration={2} suffix="%" />
            </p>
            <span className="text-gray-400 text-sm mt-1">Team Player</span>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            {/* <h2 className="text-gray-500 font-medium text-sm"></h2> */}
            <p className="text-2xl font-bold">
              <CountUp start={0} end={1000} duration={2} suffix="+" />
            </p>
            <span className="text-gray-400 text-sm mt-1">Github Commits</span>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            {/* <h2 className="text-gray-500 font-medium text-sm"></h2> */}
            <p className="text-2xl font-bold">
              <CountUp start={0} end={100} duration={2} suffix="%" />
            </p>
            <span className="text-gray-400 text-sm mt-1">
              {" "}
              Client Satisfaction
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countup;
