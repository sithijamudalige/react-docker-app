// App.js
import React, { useState, useRef } from "react";

import Navbar from "./components/Navbar";
import AboutMe from "./components/sections/AboutMe";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Experience from './components/sections/Experience';
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer"; // Fixed import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Create refs for each section
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const certificationsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null); // Added missing ref

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrollToSection={scrollToSection}
        refs={{
          aboutMeRef,
          educationRef,
          certificationsRef,
          experienceRef,
          projectsRef,
          contactRef,
          footerRef,
        }}
      />
      <main>
        <div ref={aboutMeRef}><AboutMe darkMode={darkMode} /></div>
        <div ref={educationRef}><Education darkMode={darkMode} /></div>
        <div ref={certificationsRef}><Certifications darkMode={darkMode} /></div>
        <div ref={experienceRef}><Experience darkMode={darkMode} /></div>
        <div ref={projectsRef}><Projects darkMode={darkMode} /></div>
        <div ref={contactRef}><Contact darkMode={darkMode} /></div>
        <div ref={footerRef}><Footer darkMode={darkMode} /></div>
      </main>
    </div>
  );
}

export default App;
