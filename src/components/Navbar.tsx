import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  const navItems = [
    { name: "Career", path: "/career", icon: "ri-briefcase-line" },
    { name: "Projects", path: "/projects", icon: "ri-projector-line" },
    { name: "Resume", path: "/resume", icon: "ri-file-line" },
    { name: "Contact", path: "/contact", icon: "ri-contacts-line" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`w-full bg-white fixed top-0 left-0 z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : ""
      }`}
    >
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`group text-smallTextColor transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-primaryColor"
                    : "hover:text-primaryColor"
                }`}
              >
                <span className="flex items-center">
                  <i className={`${item.icon} text-xl mr-2`}></i>
                  {item.name}
                </span>
                <div
                  className={`h-[3px] rounded-full bg-primaryColor transition-transform duration-300 ${
                    isActive(item.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></div>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <span
            className="md:hidden text-2xl text-smallTextColor cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`ri-${menuOpen ? "close-line" : "menu-line"}`}></i>
          </span>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed top-[80px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-4 z-40">
          <nav className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`text-smallTextColor transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-primaryColor"
                    : "hover:text-primaryColor"
                }`}
              >
                <span className="flex items-center">
                  <i className={`${item.icon} text-xl mr-2`}></i>
                  {item.name}
                </span>
                <div
                  className={`h-[3px] rounded-full bg-primaryColor transition-transform duration-300 ${
                    isActive(item.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
