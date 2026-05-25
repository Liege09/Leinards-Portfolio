"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! I will get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container" style={containerStyle}>
      <h1>Contact Me</h1>
      <p style={subtitleStyle}>Let's work together! Fill out the form below.</p>
      
      <div style={contactGrid}>
        {/* Left side - Contact Info */}
        <div className="card" style={contactInfoStyle}>
          <h2>📧 Get in Touch</h2>
          <p><strong>Email:</strong> leinardaro@gmail.com</p>
          <p><strong>Location:</strong> Laguna, Philippines</p>
          <p><strong>Status:</strong> Open for freelance work and collaborations</p>
          <hr style={dividerStyle} />
          <p>📱 Follow me on GitHub: <strong>Liege09</strong></p>
        </div>

        {/* Right side - Contact Form */}
        <div className="card" style={formContainer}>
          <h2>✉️ Send me a message</h2>
          <form onSubmit={handleSubmit}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Your Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
                placeholder="Enter your name"
              />
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Your Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
                placeholder="Enter your email"
              />
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                style={textareaStyle}
                placeholder="Write your message here..."
              />
            </div>
            
            <button type="submit" className="btn-primary" style={buttonStyle}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: "2rem 0",
  maxWidth: "1200px",
  margin: "0 auto",
};

const subtitleStyle = {
  textAlign: "center",
  color: "#666",
  marginBottom: "2rem",
};

const contactGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "2rem",
};

const contactInfoStyle = {
  backgroundColor: "#f5f5f5",
};

const formContainer = {
  backgroundColor: "#f5f5f5",
};

const dividerStyle = {
  margin: "1rem 0",
};

const inputGroupStyle = {
  marginBottom: "1.5rem",
};

const labelStyle = {
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "1rem",
};

const textareaStyle = {
  width: "100%",
  padding: "0.75rem",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "1rem",
  fontFamily: "inherit",
};

const buttonStyle = {
  width: "100%",
  cursor: "pointer",
};