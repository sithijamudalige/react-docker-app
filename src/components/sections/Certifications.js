// ./components/sections/Certifications.js
import React from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    date: "May 06, 2025",
    image: require("../../assets/Introduction to Modern AI.png"),
    link: "https://www.credly.com/badges/ec97b98c-7601-4531-938a-0366ab946c6b/public_url",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "April 26, 2025",
    image: require("../../assets/Introduction to Cybersecurity.png"),
    link: "https://www.netacad.com/profile?&tab=badges",
  },
  {
    title: "TryHackMe Cybersecurity",
    issuer: "Cisco TryHackMe",
    date: "Following",
    image: require("../../assets/TryHackMe.png"),
    link: "#",
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    date: "Following",
    image: require("../../assets/Ethical Hacker.png"),
    link: "#",
  },
];

export default function Certifications({ darkMode }) {
  return (
    <section className={`certifications-section ${darkMode ? "dark" : "light"}`}>
      <h2 className="certifications-title">Certifications</h2>
      <div className="certification-cards">
        {certifications.map((cert, index) => (
          <div className={`cert-wrapper`} key={index}>
            <div className="rope-top">
              <div className="rope left"></div>
              <div className="rope right"></div>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-image" />
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
