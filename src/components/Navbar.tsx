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
      className={`w-full bg-white fixed top-0 left-0 z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-xl" : "shadow-md"
      }`}
    >
      {/* Horizontal Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[80px]">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="w-[50px] h-[50px] bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-[28px] font-[500] rounded-full flex items-center justify-center font-lobster">
              A
            </span>
          </Link>

          {/* Menu Items (Horizontal) */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/career"
              className="text-smallTextColor hover:text-primaryColor transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="ri-briefcase-line text-xl"></i>
              Career
            </Link>
            <Link
              to="/projects"
              className="text-smallTextColor hover:text-primaryColor transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="ri-projector-line text-xl"></i>
              Projects
            </Link>
            <Link
              to="/resume"
              className="text-smallTextColor hover:text-primaryColor transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="ri-file-line text-xl"></i>
              Resume
            </Link>
            <Link
              to="/contact"
              className="text-smallTextColor hover:text-primaryColor transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="ri-contacts-line text-xl"></i>
              Contact
            </Link>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <span
            className="md:hidden text-2xl text-smallTextColor cursor-pointer"
            onClick={handleMenuToggle}
          >
            <i className={`ri-${menuOpen ? "close-line" : "menu-line"}`}></i>
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed top-[80px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-4 z-40"
          onClick={closeMenu}
        >
          <nav className="flex flex-col items-center gap-4">
            <Link
              to="/career"
              className="text-smallTextColor hover:text-primaryColor transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="ri-briefcase-line text-xl"></i>
              Career
            </Link>
            <Link
              to="/projects"
              className="text-smallTextColor hover:text-primaryColor transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="ri-projector-line text-xl"></i>
              Projects
            </Link>
            <Link
              to="/resume"
              className="text-smallTextColor hover:text-primaryColor transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="ri-file-line text-xl"></i>
              Resume
            </Link>
            <Link
              to="/contact"
              className="text-smallTextColor hover:text-primaryColor transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="ri-contacts-line text-xl"></i>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
