import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
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
      className={`w-full h-[80px] md:w-[80px] md:h-screen bg-white fixed top-0 left-0 z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-xl" : "shadow-md"
      }`}
    >
      {/* Vertical Navbar */}
      <div className="hidden md:flex flex-col items-center py-4 gap-6 h-full">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="w-[50px] h-[50px] bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-[28px] font-[500] rounded-full flex items-center justify-center font-lobster">
            A
          </span>
        </Link>

        <nav className="flex flex-col items-center gap-12 mt-6">
          <Link
            to="/career"
            className="flex flex-col items-center text-smallTextColor hover:text-primaryColor transition-colors duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <i className="ri-briefcase-line text-xl"></i>
            <span className="text-[12px] font-bold">Career</span>
          </Link>
          <Link
            to="/projects"
            className="flex flex-col items-center text-smallTextColor hover:text-primaryColor transition-colors duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <i className="ri-projector-line text-xl"></i>
            <span className="text-[12px] font-bold">Projects</span>
          </Link>
          <Link
            to="/contact"
            className="flex flex-col items-center text-smallTextColor hover:text-primaryColor transition-colors duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <i className="ri-contacts-line text-xl"></i>
            <span className="text-[12px] font-bold">Contact</span>
          </Link>
          <Link
            to="/resume"
            className="flex flex-col items-center text-smallTextColor hover:text-primaryColor transition-colors duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <i className="ri-file-line text-xl"></i>
            <span className="text-[12px] font-bold">Resume</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="container mx-auto px-4 md:hidden">
        <div className="flex items-center justify-between h-[80px]">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="w-[50px] h-[50px] bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-[28px] font-[500] rounded-full flex items-center justify-center font-lobster">
              A
            </span>
          </Link>

          <span
            className="text-2xl text-smallTextColor cursor-pointer"
            onClick={handleMenuToggle}
          >
            <i className={`ri-${menuOpen ? "close-line" : "mist-fill"}`}></i>
          </span>
        </div>
      </div>

      {menuOpen && (
        <div
          className="menu fixed top-[80px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-4 z-40"
          onClick={closeMenu}
        >
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link
                className="text-smallTextColor text-[14px] font-[500] hover:text-primaryColor"
                to="/career"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                className="text-smallTextColor text-[14px] font-[500] hover:text-primaryColor"
                to="/projects"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="text-smallTextColor text-[14px] font-[500] hover:text-primaryColor"
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
