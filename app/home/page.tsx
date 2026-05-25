"use client";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div style={heroContainer}>
        <div className="container" style={heroContent}>
          <h1 style={nameStyle}>Leinard Aro</h1>
          <p style={taglineStyle}>Information Technology Student | Web Developer</p>
          <p style={bioText}>
            Passionate about creating beautiful websites, custom designs, and solving problems through code.
            Currently exploring Next.js, React, and modern web technologies.
          </p>
          <div style={buttonGroup}>
            <a href="/projects" className="btn-primary" style={primaryButtonStyle}>View My Work</a>
            <a href="/contact" className="btn-secondary" style={secondaryButtonStyle}>Get In Touch</a>
          </div>
        </div>
      </div>
      
      {/* Quick Links Section */}
      <div className="container" style={quickLinksSection}>
        <h2 style={sectionTitle}>Explore My Portfolio</h2>
        <div className="grid-3">
          <div className="card">
            <h3>💻 Skills & Expertise</h3>
            <p>Web development, design production, and technical skills I've mastered along the way.</p>
            <a href="/skills" style={cardLinkStyle}>Learn More →</a>
          </div>
          <div className="card">
            <h3>📁 Featured Projects</h3>
            <p>Check out my latest work including websites, designs, and creative projects.</p>
            <a href="/projects" style={cardLinkStyle}>View Projects →</a>
          </div>
          <div className="card">
            <h3>📞 Get In Touch</h3>
            <p>Ready to collaborate? Let's discuss your next project or opportunity.</p>
            <a href="/contact" style={cardLinkStyle}>Contact Me →</a>
          </div>
        </div>
      </div>
    </>
  );
}

const heroContainer = {
  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  padding: "5rem 0",
};

const heroContent = {
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto",
};

const nameStyle = {
  fontSize: "3.5rem",
  marginBottom: "1rem",
  borderBottom: "none",
  display: "block",
  color: "white",
};

const taglineStyle = {
  fontSize: "1.5rem",
  marginBottom: "1rem",
  color: "#4fc3f7",
};

const bioText = {
  fontSize: "1.1rem",
  lineHeight: "1.6",
  marginBottom: "2rem",
  color: "#e0e0e0",
};

const buttonGroup = {
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  flexWrap: "wrap",
};

const primaryButtonStyle = {
  display: "inline-block",
};

const secondaryButtonStyle = {
  display: "inline-block",
};

const quickLinksSection = {
  padding: "4rem 0",
};

const sectionTitle = {
  textAlign: "center",
  marginBottom: "2.5rem",
  color: "#1a1a2e",
};

const cardLinkStyle = {
  color: "#4fc3f7",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
  marginTop: "1rem",
};