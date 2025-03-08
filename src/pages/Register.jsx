import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css"; // Import CSS

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Validate input fields
    if (!trimmedUsername || !trimmedEmail || !trimmedPassword) {
      alert("All fields are required!");
      return;
    }

    if (trimmedPassword.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    try {
      // Send the registration request to the backend
      await axios.post("http://localhost:4000/register", {
        username: trimmedUsername,
        email: trimmedEmail,
        password: trimmedPassword,
      });

      // If successful, store username and log the user in
      localStorage.setItem("username", trimmedUsername);
      setIsLoggedIn(true);

      // Redirect to home page
      navigate("/home");
    } catch (error) {
      // Display error message if registration fails
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      alert(errorMessage);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Register</h2>
        <input
          type="text"
          placeholder="Username"
          className="register-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="register-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          className="register-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
        <p className="register-text">
          Already have an account? <Link to="/login" className="register-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
