import React, { useState, useEffect } from "react";
import { RootState } from "../redux/types";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const theme = useSelector((state: RootState) => state.theme.theme);
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
      <div className="container mx-auto px-4 mt-2 mb-1">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="w-[50px] h-[50px] bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-[28px] font-[500] rounded-full flex items-center justify-center font-lobster">
                A
              </span>

              <span className="text-lg font-bold text-gray-700">Aswin</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li className="relative group">
                <Link
                  className="text-smallTextColor hover:text-primaryColor text-[14px] font-[600] transition-colors duration-300 ease-in-out"
                  to="/career"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Career
                </Link>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <Link
                  className="text-smallTextColor hover:text-primaryColor text-[14px] font-[600] transition-colors duration-300 ease-in-out"
                  to="/projects"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Projects
                </Link>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                <Link
                  className="text-smallTextColor hover:text-primaryColor text-[14px] font-[600] transition-colors duration-300 ease-in-out"
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Contact
                </Link>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {/* <button className="hidden md:flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor hover:text-white ease-in duration-300">
              <i className="ri-toggle-line"></i> Hire Me
              </button> */}
            <ThemeToggle />
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
