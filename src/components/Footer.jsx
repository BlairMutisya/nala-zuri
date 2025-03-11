import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img
          src="/Nalazuri logo.png"
          alt="Nalazuri Travels"
          className="footer-logo"
        />
        <div className="footer-socials">
          <FaInstagram className="social-icon" />
          <FaFacebook className="social-icon" />
          <FaWhatsapp className="social-icon" />
        </div>
        <nav className="footer-nav">
          <a href="#about">ABOUT</a>
          <a href="#blog">BLOG</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
