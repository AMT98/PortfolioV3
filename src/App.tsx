import "./App.css";
import Navbar from "./components/Navbar";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "remixicon/fonts/remixicon.css";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "./redux/themeSlice";
import React from "react";
import { RootState } from "./redux/types";
import ThemeToggleButton from "./components/ThemeToggle";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(savedTheme === "dark" ? setDarkMode() : setLightMode());
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-500 text-white" : "bg-white text-black" 
      }`}
    >
      <Navbar />
      <ThemeToggleButton />
      <Hero />
      <Career />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
