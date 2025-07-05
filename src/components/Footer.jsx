import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Nalazuri Travels</h3>
            <p className="footer-description">
              Promoting sustainable travel and environmental conservation since 2025.
            </p>
            <div className="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/donate">Donate</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Our Partners</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="https://planetpluskenya.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Planet Plus Kenya
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/green-earth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Green Earth Initiative
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/sustainable-tourism"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sustainable Tourism Alliance
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i> Lantana road, Westlands
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@nalazuritravels.com
              </li>
              <li>
                <i className="fas fa-phone"></i> +254 797 106436
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Nalazuri Travels. All rights reserved.</p>
          <div className="footer-policies">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
