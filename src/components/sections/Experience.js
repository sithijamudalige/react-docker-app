// Experience.jsx (No changes from your original React code)

import React, { useEffect, useState } from 'react';
import './Experience.css';

const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'HTML5', icon: 'html5.png' },
      { name: 'CSS3', icon: 'css3.jpg' },
      { name: 'Bootstrap', icon: 'bootstrap.png' },
      { name: 'JavaScript', icon: 'javascript.png' },
      { name: 'React', icon:'react.jpg'},
      { name: 'Angular', icon:'angular.png'},
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'PHP', icon: 'php.png' },
      { name: 'Django', icon: 'django.png' },
      { name: 'Laravel', icon:'laravel.png'},
      { name: 'Java', icon:'java.png'},
      { name: 'Flask', icon:'flask.jpg'},
    ],
  },
  {
    category: 'Database Development',
    items: [
      { name: 'MySQL', icon: 'mysql.png' },
      { name: 'Firebase', icon: 'firebase.png' },
    ],
  },
  {
    category: 'Version Control',
    items: [
      { name: 'Git', icon: 'git.png' },
      { name: 'GitHub', icon: 'github.png' },
    ],
  },
  {
    category: 'API Development & Integration',
    items: [
      { name: 'Postman', icon: 'postman.png' },
    ],
  },
  {
    category: 'Testing & Debugging',
    items: [
      { name: 'Manual Testing', icon: 'manual-testing.png' },
      { name: 'Selenium IDE', icon: 'selenium.png' },
      { name: 'Debugging', icon: 'bug.png' },
    ],
  },
  {
    category: 'AI & Data Science Tools',
    items: [
      { name: 'Jupyter Notebook', icon: 'jupyter.png' },
      { name: 'Google Colab', icon: 'colab.png' },
      { name: 'OpenCV', icon: 'opencv.png' },
      { name: 'TensorFlow', icon: 'tensorflow.png' },
      { name: 'NumPy', icon: 'numpy.png' },
      { name: 'Pandas', icon: 'pandas.png' },
    ],
  },
  {
    category: 'Networking',
    items: [
      { name: 'Cisco Packet Tracer', icon: 'Cisco.png' },
    ],
  },
  {
    category: 'Bioinformatics',
    items: [
      { name: 'Bio Python', icon: 'biopy.png' },
    ],
  },
  {
    category: 'DevOps & Containerization',
    items: [
      { name: 'Docker', icon: 'docker.jpg' },
    ],
  },
  {
    category: 'Project Management Tools',
    items: [
      { name: 'Jira', icon: 'jira.jpg' },
    ],
  },
  {
    category: 'Other Skills',
    items: [
      { name: 'Linux Basics', icon: 'linux.png' },
      { name: 'Figma (UI/UX Design)', icon: 'figma.png' },
      { name: 'Canva', icon: 'canva.png' },
      { name: 'Document Designing', icon: 'word.png' },
    ],
  },
];

const Experience = () => {
  const [activeGlowIndex, setActiveGlowIndex] = useState(0);
  const allSkills = skills.flatMap((cat) => cat.items);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGlowIndex((prevIndex) => (prevIndex + 1) % allSkills.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [allSkills.length]);

  let skillCounter = 0;

  return (
    <section className="experience-section">
      <h2 className="experience-title">Technical Skills & Experience</h2>
      <div className="experience-container">
        {skills.map((skillCategory, catIdx) => (
          <div className="skill-category" key={catIdx}>
            <h3 className="category-title">{skillCategory.category}</h3>
            <div className="skills-grid">
              {skillCategory.items.map((skill, idx) => {
                const isGlowing = skillCounter === activeGlowIndex;
                const card = (
                  <div
                    className={`skill-card ${isGlowing ? 'glow' : ''}`}
                    key={idx}
                  >
                    <img
                      src={`/skill-icons/${skill.icon}`}
                      alt={skill.name}
                      className="skill-image"
                    />
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: '60%' }}>
                        <span className="skill-bar-text"></span>
                      </div>
                    </div>
                  </div>
                );
                skillCounter++;
                return card;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
