import React, { useState } from 'react';
import './ProjectGrid.css';

const ProjectGrid = () => {
  const projects = [
    { 
      type: 'image', 
      src: '/assets/images/project1.jpg', 
      title: 'Portfolio', 
      category: 'design', 
      link: 'https://doroshen.com/' // Placeholder link
    },
    { 
      type: 'video', 
      src: '/assets/videos/project2.mp4', 
      title: 'Project 2', 
      category: 'ux/ui', 
      link: 'https://placeholder.com/project2' // Placeholder link
    },
    { 
      type: 'image', 
      src: '/assets/images/project3.jpg', 
      title: 'Recursos', 
      category: 'dev', 
      link: 'https://dev.shenko.es/' // Placeholder link
    },
    { 
      type: 'video', 
      src: '/assets/videos/project4.mp4', 
      title: 'Project 4', 
      category: 'design', 
      link: 'https://placeholder.com/project4' // Placeholder link
    },
    { 
      type: 'image', 
      src: '/assets/images/project5.jpg', 
      title: 'Project 5', 
      category: 'ux/ui', 
      link: 'https://placeholder.com/project5' // Placeholder link
    },
    { 
      type: 'video', 
      src: '/assets/videos/project6.mp4', 
      title: 'Project 6', 
      category: 'dev', 
      link: 'https://placeholder.com/project6' // Placeholder link
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' ? true : project.category === selectedCategory
  );

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('design')}>Design</button>
        <button onClick={() => setSelectedCategory('ux/ui')}>UX / UI</button>
        <button onClick={() => setSelectedCategory('dev')}>Dev</button>
      </div>

      <div className="grid-container">
        {filteredProjects.map((project, index) => (
          <a key={index} href={project.link} className="grid-item" target="_blank" rel="noopener noreferrer">
            {project.type === 'image' ? (
              <img src={project.src} alt={`Project ${index + 1}`} />
            ) : (
              <video src={project.src} autoPlay muted loop />
            )}
            <div className="project-title glitch" data-text={project.title}>
              {project.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
