function ResumePage() {
  return (
    <div style={containerStyle}>
      <h1>Resume/CV Page</h1>
      <div style={resumeContent}>
        <section style={sectionStyle}>
          <h2>Professional Summary</h2>
          <p>IT student with experience in web development, design production, and administrative leadership. Passionate about creating functional websites and custom designs.</p>
        </section>

        <section style={sectionStyle}>
          <h2>Experience</h2>
          <div style={experienceStyle}>
            <h3>Secretary (Volunteer) – Nonprofit Tree Planting Organization</h3>
            <p style={dateStyle}>1 Year</p>
            <ul>
              <li>Managed communications, documentation, and meeting coordination</li>
              <li>Supported environmental initiatives through administrative leadership</li>
            </ul>
          </div>
          <div style={experienceStyle}>
            <h3>Custom Decal & Sticker Designer – Freelance / Self-Employed</h3>
            <p style={dateStyle}>Present</p>
            <ul>
              <li>Design custom decals, stickers, and logos using Silhouette Studio and SVG editing</li>
              <li>Handle full production process: vector tracing, layout design, vinyl cutting, weeding, and transfer tape application</li>
            </ul>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2>Education</h2>
          <p><strong>BS in Information Technology</strong> - Pamantasan ng Lungsod ng San Pablo (2024-Present)</p>
          <p><strong>BS in Electronics Engineering</strong> - Laguna State Polytechnic University (2022-2024)</p>
        </section>

        <section style={sectionStyle}>
          <h2>Skills</h2>
          <ul>
            <li>Web Development: PHP, HTML, CSS, MySQL, React, Next.js</li>
            <li>Design: Silhouette Studio, SVG Editing, Logo Design</li>
            <li>Soft Skills: Problem Solving, Team Collaboration, Time Management</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: "2rem",
  maxWidth: "800px",
  margin: "0 auto",
};

const resumeContent = {
  backgroundColor: "#f5f5f5",
  padding: "2rem",
  borderRadius: "8px",
  marginTop: "1rem",
};

const sectionStyle = {
  marginBottom: "2rem",
};

const experienceStyle = {
  marginBottom: "1.5rem",
};

const dateStyle = {
  color: "#666",
  fontStyle: "italic" as const,
  marginBottom: "0.5rem",
};

export default ResumePage;