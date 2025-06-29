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
              Promoting sustainable travel and environmental conservation since
              2020.
            </p>
            <div className="footer-socials">
              <a href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Donate</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Our Partners</h3>
            <ul className="footer-links">
              <li>
                <a href="https://planetpluskenya.co.ke/">Planet Plus Kenya</a>
              </li>
              <li>
                <a href="">Green Earth Initiative</a>
              </li>
              <li>
                <a href="">Sustainable Tourism Alliance</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>Lantana road, Westlands
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
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
