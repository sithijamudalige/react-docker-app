import React, { useState } from "react";
import "./Education.css";
import sibaLogo from "../../assets/siba-logo.png";
import stSylLogo from "../../assets/stsylvesters-logo.png";

const Education = ({ darkMode }) => {
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
      duration: "2024 – Present",
      logo: sibaLogo,
    },
    {
      degree: "GCE O/L and A/L Completed",
      institute: "St. Sylvester's College, Kandy",
      duration: "Up to 2021",
      logo: stSylLogo,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="Education" className={`education-section ${darkMode ? "dark" : "light"}`}>
      <h2 className="section-title">Education</h2>
      <div className="education-carousel">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`education-card ${
              index === currentIndex
                ? "active"
                : index === currentIndex - 1 || index === currentIndex + 1
                ? "blurred"
                : "hidden"
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
      <div className="carousel-dots">
        {educationData.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
