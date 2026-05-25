function HobbiesPage() {
  return (
    <div style={containerStyle}>
      <h1>Hobbies Page</h1>
      <div style={hobbiesGrid}>
        <div style={hobbyCardStyle}>
          <div style={iconStyle}>🎮</div>
          <h2>Gaming</h2>
          <p>Enjoy playing video games in free time</p>
        </div>
        <div style={hobbyCardStyle}>
          <div style={iconStyle}>⚽</div>
          <h2>Sports</h2>
          <p>Love playing volleyball and other sports</p>
        </div>
        <div style={hobbyCardStyle}>
          <div style={iconStyle}>🏍️</div>
          <h2>Riding & Road Trips</h2>
          <p>Enjoy motorcycle rides and travel</p>
        </div>
        <div style={hobbyCardStyle}>
          <div style={iconStyle}>👥</div>
          <h2>Hanging with Friends</h2>
          <p>Sleepovers and bonding with friends</p>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

const hobbiesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.5rem",
  marginTop: "2rem",
};

const hobbyCardStyle = {
  backgroundColor: "#f5f5f5",
  padding: "1.5rem",
  borderRadius: "8px",
  textAlign: "center" as const,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const iconStyle = {
  fontSize: "3rem",
  marginBottom: "0.5rem",
};

export default HobbiesPage;