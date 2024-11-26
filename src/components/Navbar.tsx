import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-[80px] flex items-center bg-white fixed top-0 left-0 z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <span className="w-[50px] h-[50px] bg-primaryColor text-white text-[28px] font-[500] rounded-full flex items-center justify-center">
              A
            </span>
            <span className="text-lg font-bold text-gray-700">Aswin</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li>
                <a
                  className="text-smallTextColor text-[14px] font-[500] hover:text-primaryColor"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor text-[14px] font-[500] hover:text-primaryColor"
                  href="#career"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor text-[14px] font-[500] hover:text-primaryColor"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor text-[14px] font-[500] hover:text-primaryColor"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* Buttons and Hamburger */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor hover:text-white ease-in duration-300">
              <i className="ri-toggle-line"></i> Hire Me
            </button>
            <span
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
              onClick={handleMenuToggle}
            >
              <i className={`ri-${menuOpen ? "close-line" : "menu-line"}`}></i>
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="menu fixed top-[80px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-4 z-40"
          onClick={closeMenu}
        >
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a
                className="text-smallTextColor text-[14px] font-[500] hover:text-primaryColor"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-smallTextColor text-[14px] font-[500] hover:text-primaryColor"
                href="#career"
              >
                Career
              </a>
            </li>
            <li>
              <a
                className="text-smallTextColor text-[14px] font-[500] hover:text-primaryColor"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-smallTextColor text-[14px] font-[500] hover:text-primaryColor"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
