import React, { useState, useEffect } from "react";
import "./Education.css";
import sibaLogo from "../../assets/siba-logo.png";
import stSylLogo from "../../assets/stsylvesters-logo.png";

const Education = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      institute: "SIBA Campus, Pallekele",
      duration: "2022 – Present",
      logo: sibaLogo,
    },
    {
      degree: "IELTS Training Program",
      institute: "SIBA Campus, Pallekele",
      duration: "2024 – 2025",
      logo: sibaLogo,
    },
    {
      degree: "GCE O/L and A/L Completed",
      institute: "St. Sylvester's College, Kandy",
      duration: "Up to 2021",
      logo: stSylLogo,
    },
  ];

  // Automatically switch active card every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % educationData.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [educationData.length]);

  return (
    <section
      id="Education"
      className={`education-section ${darkMode ? "dark" : "light"}`}
    >
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`education-card ${
              activeIndex === index ? "active-card" : ""
            }`}
          >
            <div className="edu-logo">
              <img src={edu.logo} alt="Institute Logo" />
            </div>
            <div className="edu-details">
              <h3>{edu.degree}</h3>
              <p className="institute">{edu.institute}</p>
              <p className="duration">{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
