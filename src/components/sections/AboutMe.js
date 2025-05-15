import React, { useState, useEffect } from "react";
import profilePic from "../../assets/profile.jpg";
import "./AboutMe.css";

const AboutMe = ({ darkMode }) => {
  const fullText =
    "I am an undergraduate student pursuing a degree in Computer Science with a strong academic foundation in Data Science, Web Development, Advanced Databases, and Communication. My studies have equipped me with practical knowledge in cutting-edge technologies such as Artificial Intelligence, Digital Image Processing, and Bioinformatics. I am passionate about exploring how data, technology, and intelligent systems can be used to solve real-world problems. Currently, I am seeking an internship opportunity where I can apply my skills, gain industry experience, and continue learning as I work towards becoming a skilled professional in the tech industry.";

  const [text, setText] = useState("");
  const [btnText, setBtnText] = useState("Download My CV");

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typing);
      }
    }, 15);
    return () => clearInterval(typing);
  }, []);

  const handleButtonClick = () => {
    setBtnText("Generating...");
    setTimeout(() => {
      setBtnText("✅ Ready!");
      setTimeout(() => setBtnText("Download My CV"), 2000);
    }, 1000);
  };

  return (
    <section
      id="AboutMe"
      className={`about-section py-5 px-4 ${darkMode ? "dark" : "light"}`}
    >
      {/* ✅ Profile Photo Centered with 3D Effects */}
      <div className="profile-img-outer">
        <div className="profile-img-wrapper">
          <img
            src={profilePic}
            alt="Sithija Mudalige"
            className="profile-img"
          />
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-start pt-16">
        <div></div>
        <div>
          <h2 className="name-title">Sithija Mudalige</h2>
          <p className="subtitle">Computer Science Undergraduate</p>

          <div className="text-box">
            <p className="about-description typing-text">{text}</p>
          </div>

          <div className="glow-wrapper">
            <a
              href="/cv.pdf"
              className="cv-button"
              download
              onClick={handleButtonClick}
            >
              {btnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
