import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username"); // Clear username
    setIsLoggedIn(false); // Update login state
    navigate("/login"); // Redirect to login
  };

  const styles = {
    navbar: {
      backgroundColor: "#ff7f00",
      padding: "10px",
    },
    navLink: {
      color: "white",
      fontWeight: "500",
      marginRight: "15px",
      transition: "0.3s ease-in-out",
      textDecoration: "none",
    },
    brand: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "white",
      textDecoration: "none",
      marginRight: "20px",
    },
    btn: {
      fontWeight: "bold",
      padding: "8px 16px",
      borderRadius: "20px",
      transition: "0.3s ease-in-out",
      textDecoration: "none",
      marginLeft: "10px",
    },
    loginBtn: {
      backgroundColor: "#28a745",
      color: "white",
    },
    registerBtn: {
      backgroundColor: "#17a2b8",
      color: "white",
    },
  };

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container-fluid">
        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/home" style={styles.brand}>
            BeChef!
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home" style={styles.navLink}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={styles.navLink}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={styles.navLink}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button
                  className="btn btn-success dropdown-toggle rounded-pill"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/South">
                      South Indian Dishes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Maharashtrian">
                      Maharashtrian Dishes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Italian">
                      Italian Dishes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Continental">
                      Continental
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Punjabi">
                      Punjabi Dishes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Gujarati">
                      Gujarati Dishes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Rajasthani">
                      Rajasthani Dishes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Japanese">
                      Japanese Dishes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Korean">
                      Korean Dishes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/North">
                      North Indian Dishes
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          

          {/* Login/Register or Logout Button */}
          <div className="d-flex">
            {isLoggedIn ? (
              <button className="btn btn-success ms-2 rounded-pill" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn" style={{ ...styles.btn, ...styles.loginBtn }}>
                  Login
                </Link>
                <Link to="/register" className="btn" style={{ ...styles.btn, ...styles.registerBtn }}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
