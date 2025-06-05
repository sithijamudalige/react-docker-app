import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Certifications.css";

// Images
import aiCert from "../../assets/Introduction to Modern AI.png";
import cyberCert from "../../assets/Introduction to Cybersecurity.png";
import tryHackMe from "../../assets/TryHackMe.png";
import ethicalHacker from "../../assets/Ethical Hacker.png";

const certifications = [
  {
    title: "Modern AI",
    issuer: "Cisco",
    date: "May 06, 2025",
    image: aiCert,
    link: "https://www.credly.com/badges/ec97b98c-7601-4531-938a-0366ab946c6b/public_url",
  },
  {
    title: "Cybersecurity",
    issuer: "Cisco",
    date: "April 26, 2025",
    image: cyberCert,
    link: "https://www.netacad.com/profile?&tab=badges",
  },
  {
    title: "TryHackMe",
    issuer: "TryHackMe",
    date: "Following",
    image: tryHackMe,
    link: "#",
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    date: "Following",
    image: ethicalHacker,
    link: "#",
  },
];

const Certifications = ({ darkMode }) => {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (index) => {
    setShowDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className={`cert-section ${darkMode ? "dark" : "light"}`}>
      <h2 className="cert-heading">🎓 My Certifications</h2>
      <div className="cert-carousel">
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          grabCursor={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Autoplay, Pagination, Navigation]}
        >
          {certifications.map((cert, i) => (
            <SwiperSlide className="cert-slide" key={i}>
              <div className="cert-card" onClick={() => toggleDetails(i)}>
                {showDetails[i] ? (
                  <div className="cert-info">
                    <h3>{cert.title}</h3>
                    <p><strong>Issuer:</strong> {cert.issuer}</p>
                    <p><strong>Date:</strong> {cert.date}</p>
                    <a href={cert.link} target="_blank" rel="noreferrer">
                      🔗 View Certificate
                    </a>
                  </div>
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-image"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certifications;
