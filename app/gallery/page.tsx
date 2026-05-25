const pageSubtitle = {
  textAlign: "center" as const,
  color: "#666",
  marginBottom: "2rem",
  fontSize: "1.1rem",
};

const filterContainer = {
  display: "flex" as const,
  justifyContent: "center" as const,
  gap: "1rem",
  marginBottom: "2rem",
  flexWrap: "wrap" as const,
};

const galleryGrid = {
  display: "grid" as const,
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  gap: "1.5rem",
};

const imageWrapper = {
  width: "100%",
  height: "220px",
  overflow: "hidden" as const,
  backgroundColor: "#f0f0f0",
  display: "flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
};

const galleryImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover" as const,
  transition: "transform 0.3s ease",
};

const categoryBadge = {
  display: "inline-block" as const,
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
  display: "flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
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

const lightboxDetails = {
  color: "#888",
  fontSize: "0.85rem",
};