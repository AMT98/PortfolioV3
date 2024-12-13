import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const Countup: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-4">
        <div className="bg-white shadow-lg mb-4 rounded-lg p-6 flex flex-col items-center">
          <p className="text-2xl font-bold">
            {startAnimation && (
              <CountUp start={0} end={4} duration={3} suffix="+" />
            )}
          </p>
          <span className="text-gray-400 text-sm mt-1">
            Years of Experience
          </span>
        </div>

        <div className="bg-white shadow-lg mb-4 rounded-lg p-6 flex flex-col items-center">
          <p className="text-2xl font-bold">
            {startAnimation && (
              <CountUp start={0} end={10} duration={3} suffix="+" />
            )}
          </p>
          <span className="text-gray-400 text-sm mt-1">
            Technologies Mastered
          </span>
        </div>

        <div className="bg-white shadow-lg mb-4 rounded-lg p-6 flex flex-col items-center">
          <p className="text-2xl font-bold">
            {startAnimation && (
              <CountUp start={0} end={1000} duration={3} suffix="+" />
            )}
          </p>
          <span className="text-gray-400 text-sm mt-1">Github Commits</span>
        </div>

        <div className="bg-white shadow-lg mb-4 rounded-lg p-6 flex flex-col items-center">
          <p className="text-2xl font-bold">
            {startAnimation && (
              <CountUp start={0} end={100} duration={3} suffix="%" />
            )}
          </p>
          <span className="text-gray-400 text-sm mt-1">
            Client Satisfaction
          </span>
        </div>
      </div>
    </section>
  );
};

export default Countup;
