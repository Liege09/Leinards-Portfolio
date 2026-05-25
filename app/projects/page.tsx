"use client";

import { useState } from "react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "This personal portfolio website built with Next.js to showcase my skills and projects.",
      tech: ["Next.js", "React", "TypeScript"],
      category: "web",
      image: null
    },
    {
      id: 2,
      title: "ARO E-Commerce",
      description: "An e-commerce website built with PHP and MySQLi for online shopping functionality.",
      tech: ["PHP", "MySQLi", "HTML/CSS"],
      category: "web",
      image: null
    },
    {
      id: 3,
      title: "Custom Decal Design",
      description: "Custom sticker and decal design using Silhouette Studio and SVG editing.",
      tech: ["Silhouette Studio", "SVG", "Design"],
      category: "design",
      image: null
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getProjectIcon = (title: string) => {
    if (title.includes("Portfolio")) return "💼";
    if (title.includes("E-Commerce")) return "🛒";
    if (title.includes("Decal")) return "🎨";
    return "📁";
  };

  return (
    <div className="container" style={containerStyle}>
      <h1>My Projects</h1>
      <p style={subtitleStyle}>Here are some of my recent works</p>
      
      <div style={filterContainer}>
        <button onClick={() => setFilter("all")} style={filterButton(filter === "all")}>All</button>
        <button onClick={() => setFilter("web")} style={filterButton(filter === "web")}>Web Development</button>
        <button onClick={() => setFilter("design")} style={filterButton(filter === "design")}>Design</button>
      </div>
      
      <div className="grid-2">
        {filteredProjects.map((project) => (
          <div key={project.id} className="card" style={projectCardStyle}>
            <div style={imageWrapperStyle}>
              <div style={projectPlaceholder}>
                <span style={projectIcon}>{getProjectIcon(project.title)}</span>
                <p style={projectPlaceholderText}>{project.title}</p>
              </div>
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div style={techStackStyle}>
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge" style={techBadgeStyle}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <p style={noteStyle}>* More projects coming soon as I continue learning!</p>
    </div>
  );
}

const containerStyle = {
  padding: "2rem 0",
  maxWidth: "1200px",
  margin: "0 auto",
};

const subtitleStyle = {
  textAlign: "center" as const,
  color: "#666",
  marginBottom: "2rem",
};

const filterContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  marginBottom: "2rem",
  flexWrap: "wrap" as const,
};

const filterButton = (isActive: boolean) => ({
  padding: "0.5rem 1.5rem",
  border: "2px solid #4fc3f7",
  backgroundColor: isActive ? "#4fc3f7" : "transparent",
  color: isActive ? "#1a1a2e" : "#4fc3f7",
  borderRadius: "25px",
  cursor: "pointer",
  fontSize: "0.9rem",
  transition: "all 0.3s ease",
});

const projectCardStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column" as const,
};

const imageWrapperStyle = {
  width: "100%",
  height: "180px",
  overflow: "hidden",
  backgroundColor: "#1a1a2e",
  borderRadius: "8px",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const projectPlaceholder = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

const projectIcon = {
  fontSize: "3rem",
  color: "#4fc3f7",
};

const projectPlaceholderText = {
  color: "white",
  marginTop: "0.5rem",
  fontSize: "0.8rem",
};

const techStackStyle = {
  marginTop: "1rem",
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap" as const,
};

const techBadgeStyle = {
  backgroundColor: "#1a1a2e",
  color: "white",
  padding: "0.25rem 0.75rem",
  borderRadius: "15px",
  fontSize: "0.8rem",
};

const noteStyle = {
  marginTop: "2rem",
  textAlign: "center" as const,
  color: "#666",
};