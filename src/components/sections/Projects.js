import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Football Learning Web Application",
    tech: "Django, MySQL, Bootstrap",
    features: [
      "Personalized training plan selection",
      "Progress tracking",
      "Motivational interface",
    ],
    highlight:
      "Integrated AI to recommend suitable football training plans and monitor user progress dynamically.",
    link: "https://github.com/sithijamudalige/football-training-ai.git",
    icon: "football-learning.png",
  },
  {
    title: "Footballer Recognition AI System",
    tech: "Python, Jupyter Notebook",
    features: ["Image processing for identifying football players"],
    highlight:
      "Trained with footballer image datasets; prompts user feedback for incorrect predictions and retrains model to improve accuracy.",
    link: "https://github.com/sithijamudalige/soccer-player-identifier-ai.git",
    icon: "footballer-recognition.png",
  },
  {
    title: "Inventory Management System",
    tech: "Java Servlets, JSP, MySQL",
    features: ["Inventory tracking", "POS", "Reporting", "User management"],
    highlight:
      "Full-stack inventory solution with dynamic reporting and secure role-based user access.",
    link: "https://github.com/sithijamudalige/-Inventory-Management-System-using-jsp-.git",
    icon: "inventory-system.png",
  },
  {
    title: "Shopping Web Application",
    tech: "PHP, HTML, MySQL, Advanced Database",
    features: ["Item listing", "Buying", "Basic cart functions"],
    highlight:
      "Implemented advanced database management with real-time item updates and transactional integrity.",
    link: "https://github.com/Darshana-stan/Clothing-Store-App.git",
    icon: "shopping-app.png",
  },
  {
    title: "Inventory System for Herath Tiles (In Development)",
    tech: "Django, React, Firebase",
    features: ["Real-time tracking", "Sales logging", "Client dashboard"],
    highlight:
      "Built for real client Herath Tiles with modern stack integration and responsive interface.",
    link: "https://github.com/sithijamudalige/developing-project.git",
    icon: "herath-tiles.png",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">🛠️ Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              key={index}
            >
              <div className="project-inner">
                <div className="project-header">
                  <img
                    src={`/project-icons/${project.icon}`}
                    alt={project.title}
                    className="project-icon"
                  />
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-tech">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <p className="project-highlight">
                  <strong>Highlight:</strong> {project.highlight}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
