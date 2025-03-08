import React, { useState } from "react";
import "../App.css"; // Import CSS

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:4000/contact", { // ✅ Fixed URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      setSuccess("Thank you! Your message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-text">
          Have questions or feedback? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
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
          <button type="submit" className="form-button" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
