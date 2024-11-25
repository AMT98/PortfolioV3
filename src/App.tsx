import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import 'remixicon/fonts/remixicon.css';


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Career />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
