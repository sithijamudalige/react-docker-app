// AboutMe.js
import React, { useState, useEffect } from "react";
import profilePic from "../../assets/profile.jpg";
import coverImage from "../../assets/cover.jpg";
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
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 15);
    return () => clearInterval(typing);
  }, []);

  const handleButtonClick = () => {
    const button = document.querySelector(".cv-button");

    setBtnText("\u23F3 Preparing...");
    button.classList.add("loading");
    button.classList.add("clicked");

    setTimeout(() => {
      setBtnText("\uD83C\uDF89 Ready to Download!");
      button.classList.remove("loading");
      button.classList.add("ready");

      setTimeout(() => {
        setBtnText("Download My CV");
        button.classList.remove("ready");
        button.classList.remove("clicked");
      }, 2500);
    }, 2000);
  };

  return (
    <section
      id="AboutMe"
      className={`about-section py-5 px-4 ${darkMode ? "dark" : "light"}`}
    >
      <div className="cover-photo-wrapper">
        <img src={coverImage} alt="Cover" className="cover-photo" />
        <div className="cover-overlay"></div>
        <div className="cover-title">
          <h1>Sithija Mudalige</h1>
          <p>Computer Science Undergraduate</p>
        </div>
      </div>

      <div className="profile-img-outer">
        <div className="profile-img-wrapper">
          <img src={profilePic} alt="Sithija Mudalige" className="profile-img" />
        </div>
      </div>

      <div className="about-container">
        <div>
          <h2 className="name-title">About Me</h2>
          <p className="subtitle">Get to know me better</p>

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
