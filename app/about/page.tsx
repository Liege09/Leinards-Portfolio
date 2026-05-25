"use client";

function AboutPage() {
  return (
    <div style={containerStyle}>
      <h1>About Me Page</h1>
      <div style={contentStyle}>
        <div style={profileContainer}>
          <div style={placeholderImageStyle}>
            <span style={placeholderIcon}>👤</span>
          </div>
          <div style={bioStyle}>
            <h2>Who Am I?</h2>
            <p>I'm Leinard Aro, an Information Technology student from Laguna, Philippines.</p>
            
            <h3>My Journey</h3>
            <p>I enjoy learning and improving on everything I do. As an IT student, I'm constantly exploring new technologies and finding better ways to solve problems.</p>
            
            <h3>What I Do</h3>
            <p>From coding websites to designing custom stickers and decals, I love working on projects that combine creativity and technical skills.</p>
            
            <h3>My Philosophy</h3>
            <p>Always keep learning. Stay curious. Never stop improving.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: "2rem",
  maxWidth: "1000px",
  margin: "0 auto",
};

const contentStyle = {
  marginTop: "1rem",
};

const profileContainer = {
  display: "flex" as const,
  gap: "2rem",
  flexWrap: "wrap" as const,
  alignItems: "flex-start" as const,
};

const placeholderImageStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  backgroundColor: "#1a1a2e",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const placeholderIcon = {
  fontSize: "4rem",
  color: "#4fc3f7",
};

const bioStyle = {
  lineHeight: "1.6",
  flex: 1,
};

export default AboutPage;