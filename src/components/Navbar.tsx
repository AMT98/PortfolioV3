import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white test-[18px] font-[500] rounded-full flex items-center justify-center">
              A
            </span>
          </div>
          <div className="menu cursor-pointer">
            <ul className="flex items-center gap-10">
              <li>
                <a
                  className="text-smallTextColor text-[14px] font-[500]"
                  href="#about"
                ></a>
                About
              </li>
              <li>
                <a
                  className="text-smallTextColor text-[14px] font-[500]"
                  href="#services"
                ></a>
                Services
              </li>
              <li>
                <a
                  className="text-smallTextColor text-[14px] font-[500]"
                  href="#portfolio"
                ></a>
                Portfolio
              </li>
              <li>
                <a
                  className="text-smallTextColor text-[14px] font-[500]"
                  href="#contact"
                ></a>
                Contact
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
              <i className="ri-send-plane-line"></i> Let's Talk
            </button>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer"><i className="ri-menu-line"></i></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
