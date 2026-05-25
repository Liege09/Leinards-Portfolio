function AchievementsPage() {
  return (
    <div style={containerStyle}>
      <h1>Achievements and Awards Page</h1>
      <div style={achievementsList}>
        <div style={achievementCardStyle}>
          <p>🏆 Secretary, Nonprofit Tree Planting Organization – served one year, managing communications and documentation</p>
        </div>
        <div style={achievementCardStyle}>
          <p>🏃 4th Place, LSPU San Pablo Campus Color Fun Run 2024 – "Takbo para sa Atelang Ka-Piyu" (May 5, 2024)</p>
        </div>
        <div style={achievementCardStyle}>
          <p>📚 Seminar Attendee (Electronics Engineering) – completed multiple technical seminars</p>
        </div>
        <div style={achievementCardStyle}>
          <p>🏐 2nd Place (Twice), Volleyball – helped team secure runner-up position in two separate sports events</p>
        </div>
        <div style={achievementCardStyle}>
          <p>💻 Seminar Attendee (Information Technology) – actively attending IT-focused seminars</p>
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

const achievementsList = {
  marginTop: "2rem",
};

const achievementCardStyle = {
  backgroundColor: "#f5f5f5",
  padding: "1rem",
  borderRadius: "8px",
  marginBottom: "1rem",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  fontSize: "1rem",
};

export default AchievementsPage;