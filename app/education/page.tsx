function EducationPage() {
  return (
    <div style={containerStyle}>
      <h1>Educational Background Page</h1>
      <div style={educationList}>
        <div style={educationCardStyle}>
          <h2>BS in Information Technology</h2>
          <h3 style={schoolStyle}>Pamantasan ng Lungsod ng San Pablo</h3>
          <p style={yearStyle}>2024 - Present</p>
          <p>Currently pursuing IT degree</p>
        </div>
        <div style={educationCardStyle}>
          <h2>BS in Electronics Engineering</h2>
          <h3 style={schoolStyle}>Laguna State Polytechnic University</h3>
          <p style={yearStyle}>2022 - 2024</p>
          <p>Completed two years of Engineering</p>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: "2rem",
  maxWidth: "800px",
  margin: "0 auto",
};

const educationList = {
  marginTop: "2rem",
};

const educationCardStyle = {
  backgroundColor: "#f5f5f5",
  padding: "1.5rem",
  borderRadius: "8px",
  marginBottom: "1.5rem",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const schoolStyle = {
  color: "#666",
  marginBottom: "0.5rem",
};

const yearStyle = {
  color: "#1a1a2e",
  fontWeight: "bold" as const,
  marginBottom: "0.5rem",
};

export default EducationPage;