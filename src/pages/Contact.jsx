import React, { useState } from "react";
import "../App.css"; // Import CSS

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    alert(`Thank you, ${name}! Your message has been sent.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-text">
          Have questions or feedback? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              className="form-textarea"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;