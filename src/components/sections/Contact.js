// src/components/sections/Contact.js
import React from "react";
import "./Contact.css";

const contactItems = [
  {
    icon: "/icons/phone.png",
    label: "Phone",
    detail: "+94-787675866",
    link: "tel:+94787675866",
  },
  {
    icon: "/icons/email.png",
    label: "Email",
    detail: "sithijamudalige15@gmail.com",
    link: "mailto:sithijamudalige15@gmail.com",
  },
  {
    icon: "/icons/location.png",
    label: "Address",
    detail: "No 68 Uduwela Road, Ampitiya, Kandy",
    link: "https://goo.gl/maps/v4RXZYafRPPgxehp7?g_st=aw",
  },
  {
    icon: "/icons/linkedin.png",
    label: "LinkedIn",
    detail: "linkedin.com/in/sithija-mudalige",
    link: "https://www.linkedin.com/in/sithija-mudalige-7b5235289",
  },
  {
    icon: "/icons/github.png",
    label: "GitHub",
    detail: "github.com/sithijamudalige",
    link: "https://github.com/sithijamudalige",
  },
];

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">📞 Contact Me</h2>
      <div className="contact-grid">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="cube-container">
              <div className="cube">
                <div className="face front">
                  <img src={item.icon} alt={item.label} />
                </div>
                <div className="face back">
                  <img src={item.icon} alt={item.label} />
                </div>
                <div className="face left">
                  <img src={item.icon} alt={item.label} />
                </div>
                <div className="face right">
                  <img src={item.icon} alt={item.label} />
                </div>
                <div className="face top">
                  <img src={item.icon} alt={item.label} />
                </div>
                <div className="face bottom">
                  <img src={item.icon} alt={item.label} />
                </div>
              </div>
            </div>
            <p className="contact-detail">{item.detail}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
