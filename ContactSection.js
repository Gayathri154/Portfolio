// src/components/ContactSection.jsx

import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  // Local state for handling the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Update form state on user input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission – for demonstration, we use an alert and log the data.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    alert("Thank you for your message!");
    // Optionally, reset the form:
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left side: Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            If you're interested in working together or have any questions,
            feel free to reach out!
          </p>
          <ul className="info-list">
            <li>
              <span className="icon" role="img" aria-label="Email">
                📧
              </span>
              <span className="text">gayatri15404@gmail.com</span>
            </li>
            <li>
              <span className="icon" role="img" aria-label="Phone">
                ☎
              </span>
              <span className="text">+91 7989351094</span>
            </li>
            <li>
              <span className="icon" role="img" aria-label="Location">
                📍
              </span>
              <span className="text">Vijayawada,Andhra Pradesh</span>
            </li>
          </ul>
          
        </div>

        {/* Right side: Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
