import React from "react";

const Footer = () => {
  
  const styles = {
    footer: {
      backgroundColor: "#493267",
      color: "white",
      padding: "20px 0",
      marginTop: "40px",
    },
    footerContent: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    footerSection: {
      margin: "10px 20px",
    },
    footerLink: {
      color: "white",
      textDecoration: "none",
      margin: "0 10px",
    },
    footerLinkHover: {
      textDecoration: "underline",
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
    },
    socialIcon: {
      width: "32px", 
      height: "32px",
      margin: "0 10px", 
      transition: "transform 0.3s ease-in-out", 
    },
    socialIconHover: {
      transform: "scale(1.2)", 
    },
    copyright: {
      textAlign: "center",
      marginTop: "20px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h5>Quick Links</h5>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="/" style={styles.footerLink}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" style={styles.footerLink}>
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" style={styles.footerLink}>
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy-policy" style={styles.footerLink}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h5>Follow Us</h5>
          <div style={styles.socialIcons}>
            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              style={styles.footerLink}
              onMouseEnter={(e) => {
                e.target.style.transform = styles.socialIconHover.transform;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              <img
                src="data:image/png;base64,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"
                alt="Facebook"
                style={styles.socialIcon}
              />
            </a>
            {/* Twitter Icon */}
            <a
              href="https://twitter.com"
              style={styles.footerLink}
              onMouseEnter={(e) => {
                e.target.style.transform = styles.socialIconHover.transform;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              <img
                src="data:image/png;base64,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"
                alt="Twitter"
                style={styles.socialIcon}
              />
            </a>
            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              style={styles.footerLink}
              onMouseEnter={(e) => {
                e.target.style.transform = styles.socialIconHover.transform;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="Instagram"
                style={styles.socialIcon}
              />
              </a>


              {/* youtube Icon */}
            <a
              href="https://youtube.com"
              style={styles.footerLink}
              onMouseEnter={(e) => {
                e.target.style.transform = styles.socialIconHover.transform;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              <img
                src="data:image/png;base64,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"
                alt="Youtube"
                style={styles.socialIcon}
              />
              </a>
          </div>
        </div>
        <div style={styles.footerSection}>
          <h5>Newsletter</h5>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              style={{ padding: "5px", borderRadius: "4px", border: "none" }}
            />
            <button
              type="submit"
              style={{
                padding: "5px 10px",
                backgroundColor: "white",
                color: "#28a745",
                border: "none",
                borderRadius: "4px",
                marginLeft: "5px",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} BeChef!. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;