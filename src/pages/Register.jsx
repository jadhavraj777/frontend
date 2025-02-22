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
    try {
      await axios.post("http://localhost:3000/register", { username, email, password });
      localStorage.setItem("username", username);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      alert("Registration failed. Please try again.");
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="register-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="register-input"
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