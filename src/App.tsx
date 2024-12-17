import "./App.css";
import Navbar from "./components/Navbar";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "remixicon/fonts/remixicon.css";
import React from "react";
// import ThemeToggleButton from "./components/ThemeToggle";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      {/* <ThemeToggleButton /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
