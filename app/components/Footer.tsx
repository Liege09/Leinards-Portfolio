"use client";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContent}>
        <div style={footerSection}>
          <h3 style={footerTitle}>Leinard Aro</h3>
          <p>IT Student | Web Developer</p>
          <p>Laguna, Philippines</p>
        </div>
        
        <div style={footerSection}>
          <h3 style={footerTitle}>Quick Links</h3>
          <div style={linkGroup}>
            <a href="/projects" style={footerLink} onMouseEnter={(e) => {
              e.currentTarget.style.color = "#4fc3f7";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.color = "white";
            }}>Projects</a>
            <a href="/gallery" style={footerLink} onMouseEnter={(e) => {
              e.currentTarget.style.color = "#4fc3f7";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.color = "white";
            }}>Gallery</a>
            <a href="/hobbies" style={footerLink} onMouseEnter={(e) => {
              e.currentTarget.style.color = "#4fc3f7";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.color = "white";
            }}>Hobbies</a>
            <a href="/skills" style={footerLink} onMouseEnter={(e) => {
              e.currentTarget.style.color = "#4fc3f7";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.color = "white";
            }}>Skills</a>
            <a href="/contact" style={footerLink} onMouseEnter={(e) => {
              e.currentTarget.style.color = "#4fc3f7";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.color = "white";
            }}>Contact</a>
          </div>
        </div>
        
        <div style={footerSection}>
          <h3 style={footerTitle}>Connect</h3>
          <p>📧 leinardaro@gmail.com</p>
          <p>💻 GitHub: Liege09</p>
        </div>
      </div>
      
      <div style={copyrightStyle}>
        <p>&copy; {new Date().getFullYear()} Leinard Aro. All rights reserved.</p>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#1a1a2e",
  color: "white",
  marginTop: "3rem",
};

const footerContent = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
  padding: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

const footerSection = {
  textAlign: "center",
};

const footerTitle = {
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
  color: "#4fc3f7",
};

const linkGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const footerLink = {
  color: "white",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const copyrightStyle = {
  textAlign: "center",
  padding: "1rem",
  borderTop: "1px solid #333",
  fontSize: "0.9rem",
};