import React from "react";

const Navbar = () => {
  
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
    navLinkHover: {
      color: "#ffd700", 
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
          <a className="navbar-brand" href="/Home" style={styles.brand}>BeChef!</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/Home" style={styles.navLink}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About" style={styles.navLink}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact" style={styles.navLink}>Contact Us</a>
            </li>
            <li className="nav-item">
            <div class="dropdown">
  <a class="btn btn-success dropdown-toggle" href="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/South">South Indian Dishes</a></li>
    <li><a class="dropdown-item" href="/Maharashtrian">Maharashtrian Dishes</a></li>
    <li><a class="dropdown-item" href="/Italean">Italian Dishes </a></li>
    <li><a class="dropdown-item" href="/Continental">Continental </a></li>
    <li><a class="dropdown-item" href="/Punjabi">Punjabi Dishes </a></li>
    <li><a class="dropdown-item" href="/Gujrati">Gujrati Dishes </a></li>
    <li><a class="dropdown-item" href="/Rajasthani">Rajasthani Dishes</a></li>
    <li><a class="dropdown-item" href="/Japanease">Japanease Dishes</a></li>
    <li><a class="dropdown-item" href="/Korean">Korean Dishes</a></li>
    <li><a class="dropdown-item" href="/North">North Indian Dishes</a></li>

  </ul>
</div>
            </li>
            
          </ul>

          <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success text-white" type="submit">Search</button>
      </form>

          {/* Login/Register Buttons */}
          <div className="d-flex">
            <a href="/login" className="btn" style={{ ...styles.btn, ...styles.loginBtn }}>Login</a>
            <a href="/register" className="btn" style={{ ...styles.btn, ...styles.registerBtn }}>Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
