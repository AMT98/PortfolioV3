import React from "react";

const Footer: React.FC = () => (
  <footer className="py-8 relative">
    <div className="footer-gradient" />
    <div className={`mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            <span className="w-[50px] h-[50px] bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-[28px] font-[500] rounded-full flex items-center justify-center font-lobster">
              A
            </span>
          </h4>
          <p className="font-normal text-[14px] text-black opacity-50">
            Copyright © 2024 Aswin Malla. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
