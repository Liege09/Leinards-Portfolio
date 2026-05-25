"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Color Fun Run 2024",
      description: "Takbo para sa Atelang Ka-Piyu - May 5, 2024",
      details: "Organized by: Piyu Sports Club | LSPU Office of Sports and Cultural Affairs",
      image: "/images/2024 Color Fun Run.jpg",
      category: "events"
    },
    {
      id: 2,
      title: "Tree Planting Activity",
      description: "Environmental initiative with HPKL nonprofit organization",
      details: "Secretary, Nonprofit Tree Planting Organization",
      image: "/images/HPKL Tree Planting.jpg",
      category: "events"
    },
    {
      id: 3,
      title: "Custom Decal Design",
      description: "Sample of decal and sticker design work",
      details: "Silhouette Studio | SVG Editing",
      image: "/images/Custom Decal Design.png",
      category: "design"
    },
    {
      id: 4,
      title: "Sticker Production",
      description: "Vinyl cutting, weeding, and sticker production process",
      details: "Full production workflow",
      image: "/images/Sticky Production.jpg",
      category: "design"
    },
    {
      id: 5,
      title: "ARO E-Commerce",
      description: "E-commerce website built with PHP and MySQLi",
      details: "PHP | MySQLi | HTML/CSS",
      image: "/images/ARO E-Commerce.png",
      category: "development"
    },
    {
      id: 6,
      title: "My Portfolio Website",
      description: "Personal portfolio website built with Next.js",
      details: "Next.js | React | TypeScript",
      image: "/images/My Portfolio.png",
      category: "development"
    },
    {
      id: 7,
      title: "Volleyball Event",
      description: "2nd Place finish in two separate sports events",
      details: "College of Engineering Sports Festival",
      image: "/images/Volleyball COE Event.jpg",
      category: "events"
    },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (image: any) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div style={pageContainer}>
      <div style={contentContainer}>
        <h1 style={pageTitle}>My Gallery</h1>
        <p style={pageSubtitle}>A glimpse of my work, activities, and interests</p>
        
        <div style={filterContainer}>
          <button onClick={() => setFilter("all")} style={filterButtonStyle}>All</button>
          <button onClick={() => setFilter("events")} style={filterButtonStyle}>Events</button>
          <button onClick={() => setFilter("design")} style={filterButtonStyle}>Design</button>
          <button onClick={() => setFilter("development")} style={filterButtonStyle}>Development</button>
        </div>
        
        <div style={galleryGrid}>
          {filteredItems.map((item) => (
            <div key={item.id} style={galleryCard} onClick={() => openLightbox(item)}>
              <div style={imageWrapper}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={galleryImage}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.backgroundColor = "#1a1a2e";
                      parent.style.display = "flex";
                      parent.style.alignItems = "center";
                      parent.style.justifyContent = "center";
                      const span = document.createElement("span");
                      span.style.fontSize = "3rem";
                      span.style.color = "#4fc3f7";
                      span.innerHTML = "🖼️";
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
              <div style={cardText}>
                <h3 style={cardTitle}>{item.title}</h3>
                <p style={cardDescription}>{item.description}</p>
                <span style={categoryBadge}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div style={lightboxOverlay} onClick={closeLightbox}>
          <div style={lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button style={closeButton} onClick={closeLightbox}>✕</button>
            <img src={selectedImage.image} alt={selectedImage.title} style={lightboxImage} />
            <h3 style={lightboxTitle}>{selectedImage.title}</h3>
            <p style={lightboxDesc}>{selectedImage.description}</p>
            <p style={lightboxDetails}>{selectedImage.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const pageContainer = {
  padding: "2rem 1rem",
  minHeight: "100vh",
};

const contentContainer = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const pageTitle = {
  fontSize: "2.5rem",
  color: "#1a1a2e",
  borderBottom: "3px solid #4fc3f7",
  display: "inline-block",
  paddingBottom: "0.5rem",
  marginBottom: "1rem",
};

const pageSubtitle = {
  textAlign: "center" as const,
  color: "#666",
  marginBottom: "2rem",
  fontSize: "1.1rem",
};

const filterContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  marginBottom: "2rem",
  flexWrap: "wrap" as const,
};

const filterButtonStyle = {
  padding: "0.5rem 1.5rem",
  border: "2px solid #4fc3f7",
  backgroundColor: "transparent",
  color: "#4fc3f7",
  borderRadius: "25px",
  cursor: "pointer",
  fontSize: "0.9rem",
  transition: "all 0.3s ease",
};

const galleryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  gap: "1.5rem",
};

const galleryCard = {
  backgroundColor: "white",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

const imageWrapper = {
  width: "100%",
  height: "220px",
  overflow: "hidden",
  backgroundColor: "#f0f0f0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const galleryImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover" as const,
  transition: "transform 0.3s ease",
};

const cardText = {
  padding: "1.5rem",
};

const cardTitle = {
  fontSize: "1.3rem",
  color: "#1a1a2e",
  marginBottom: "0.5rem",
};

const cardDescription = {
  color: "#555",
  marginBottom: "0.5rem",
  lineHeight: "1.5",
};

const categoryBadge = {
  display: "inline-block",
  padding: "0.25rem 0.75rem",
  backgroundColor: "#4fc3f7",
  color: "#1a1a2e",
  borderRadius: "15px",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};

const lightboxOverlay = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.9)",
  zIndex: 2000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const lightboxContent = {
  maxWidth: "90%",
  maxHeight: "90%",
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "1rem",
  textAlign: "center" as const,
  position: "relative" as const,
};

const closeButton = {
  position: "absolute" as const,
  top: "10px",
  right: "20px",
  fontSize: "2rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#333",
};

const lightboxImage = {
  maxWidth: "100%",
  maxHeight: "60vh",
  objectFit: "contain" as const,
};

const lightboxTitle = {
  marginTop: "1rem",
  color: "#1a1a2e",
};

const lightboxDesc = {
  color: "#555",
};

const lightboxDetails = {
  color: "#888",
  fontSize: "0.85rem",
};