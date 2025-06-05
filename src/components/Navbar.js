import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode, scrollToSection, refs }) => {
  const navLinks = [
    { name: "About Me", ref: refs.aboutMeRef },
    { name: "Education", ref: refs.educationRef },
    { name: "Certifications", ref: refs.certificationsRef },
    { name: "Experience", ref: refs.experienceRef },
    { name: "Projects", ref: refs.projectsRef },
    { name: "Contact", ref: refs.contactRef },
   
  ];

  const handleNavClick = (ref) => {
    scrollToSection(ref);

    // Auto close the navbar on mobile view after clicking
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      new window.bootstrap.Collapse(navbarCollapse).hide();
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-dark bg-dark glowing-navbar`}>
      <div className="container-fluid">
        <span className="navbar-brand">Sithija's Portfolio</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a
                  className="nav-link"
                  role="button"
                  onClick={() => handleNavClick(link.ref)}
                >
                  {link.name}
                </a>
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
