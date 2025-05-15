import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navLinks = [
    "AboutMe",
    "Education",
    "Certifications",
    "Experience",
    "Projects",
    "Contact"
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-dark bg-dark glowing-navbar`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Sithija's Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <a className="nav-link" href={`#${link}`}>{link}</a>
              </li>
            ))}
            <li className="nav-item">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="btn btn-outline-light ms-2"
                title="Toggle Dark Mode"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
