"use client";

export default function Header() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Hobbies", path: "/hobbies" },
    { name: "Education", path: "/education" },
    { name: "Achievements", path: "/achievements" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header style={headerStyle}>
      <div style={navContainer}>
        <div style={logoStyle}>
          <a href="/" style={logoLink}>Aro's Portfolio</a>
        </div>
        
        <nav>
          <ul style={navListStyle}>
            {navItems.map((item) => (
              <li key={item.name} style={navItemStyle}>
                <a href={item.path} style={linkStyle} onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#4fc3f7";
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.color = "white";
                }}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#1a1a2e",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const navContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

const logoStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
};

const logoLink = {
  color: "#4fc3f7",
  textDecoration: "none",
};

const navListStyle = {
  display: "flex",
  listStyle: "none",
  gap: "1.5rem",
  margin: 0,
  padding: 0,
  flexWrap: "wrap",
};

const navItemStyle = {
  margin: 0,
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "0.5rem 0",
  transition: "color 0.3s ease",
};