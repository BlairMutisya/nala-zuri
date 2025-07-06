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
                href="https://www.instagram.com/nalazuritravels/"
                target=""
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/makeadifference">Projects</a></li>
              <li><a href="/makeadifference">Donate</a></li>
              <li><a href="/ourstory">Our Team</a></li>
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
