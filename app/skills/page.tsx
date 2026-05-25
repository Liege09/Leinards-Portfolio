function SkillsPage() {
  return (
    <div style={containerStyle}>
      <h1>Skills Page</h1>
      
      <h2>💻 Web Development & Programming</h2>
      <div style={skillsGrid}>
        <span style={skillBadge}>PHP Development</span>
        <span style={skillBadge}>HTML</span>
        <span style={skillBadge}>CSS</span>
        <span style={skillBadge}>MySQL</span>
        <span style={skillBadge}>Frontend Development</span>
        <span style={skillBadge}>Backend Development</span>
        <span style={skillBadge}>Responsive Web Design</span>
        <span style={skillBadge}>AI-Assisted Coding</span>
        <span style={skillBadge}>Debugging & Troubleshooting</span>
        <span style={skillBadge}>VS Code</span>
        <span style={skillBadge}>Notepad++</span>
      </div>

      <h2>🎨 Design & Production</h2>
      <div style={skillsGrid}>
        <span style={skillBadge}>Silhouette Studio Design</span>
        <span style={skillBadge}>SVG Editing</span>
        <span style={skillBadge}>Layout Design</span>
        <span style={skillBadge}>Vinyl Cutting</span>
        <span style={skillBadge}>Sticker Printing</span>
        <span style={skillBadge}>Weeding</span>
        <span style={skillBadge}>Transfer Tape Application</span>
        <span style={skillBadge}>Custom Decal Production</span>
      </div>

      <h2>🤝 Soft Skills</h2>
      <div style={skillsGrid}>
        <span style={skillBadge}>Problem Solving</span>
        <span style={skillBadge}>Attention to Detail</span>
        <span style={skillBadge}>Creativity</span>
        <span style={skillBadge}>Time Management</span>
        <span style={skillBadge}>Adaptability</span>
        <span style={skillBadge}>Team Collaboration</span>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

const skillsGrid = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "0.75rem",
  marginBottom: "2rem",
};

const skillBadge = {
  backgroundColor: "#1a1a2e",
  color: "white",
  padding: "0.5rem 1rem",
  borderRadius: "20px",
  fontSize: "0.9rem",
};

export default SkillsPage;