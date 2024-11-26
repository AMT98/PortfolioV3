import "./App.css";
import Navbar from "./components/Navbar";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "remixicon/fonts/remixicon.css";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "./redux/themeSlice"; 
import ThemeToggle from "./components/ThemeToggle"; 
import React from "react";

const App: React.FC = () => {
  const theme = useSelector(
    (state: { theme: { theme: string } }) => state.theme.theme
  );
  const dispatch = useDispatch();
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
      className={
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }
    >
      <ThemeToggle />
      <Navbar />
      <Hero />
      <Career />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
