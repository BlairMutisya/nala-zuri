import React from "react";
import "./LandingPage.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Blog1 from "../assets/Blog1.jpg";
import Blog2 from "../assets/Blog2.jpg";
import Blog3 from "../assets/Blog3.jpg";
import Footer from "../components/Footer";


const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <h2>EXPLORE THE BEAUTY OF</h2>
          <h1>KENYA</h1>
          <h2>WITH NALA-ZURI TRAVELS</h2>
        </div>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebook />
          <FaWhatsapp />
        </div>
      </div>

      {/* New Section */}
      <section className="journey-section">
        <div className="journey-text">
          <h2>
            A JOURNEY OF ELEGANCE FROM UNTAMED WILDERNESS TO COASTAL SERENITY
          </h2>
          <div className="underline"></div>
        </div>
        <div className="journey-content">
          <p>
            Experience Kenya in unparalleled style, filled with curated
            discoveries. Begin your journey with an intimate{" "}
            <strong>safaris</strong>, immersing yourself in the raw beauty of
            the Maasai Mara or the serene landscapes of Amboseli, where
            elephants roam beneath the shadow of Mount Kilimanjaro. Retreat to
            exclusive lodges and tented camps, where personalized service and
            breathtaking vistas create an atmosphere of refined tranquility.
          </p>
          <p>
            From the wild heart of Africa, transition to the{" "}
            <strong>Swahili Coast</strong>, where the rhythm of the ocean meets
            centuries of rich heritage. Indulge in the pristine beauty of Diani,
            the cultural charm of Lamu, or the secluded elegance of Watamu and
            Kilifi. Savor exquisite cuisine, unwind in sophisticated coastal
            retreats, and immerse yourself in the warm hospitality of Kenya’s
            timeless shores.
          </p>
        </div>
      </section>
      {/* Full-Width Image Section */}
      <div className="full-width-image"></div>
      <div className="nalazuri-travels-section">
        <div className="nalazuri-left">
          <h2>
            NALAZURI <br /> TRAVELS
          </h2>
          <div className="vertical-line"></div>
        </div>
        <div className="nalazuri-right">
          <p>
            At <strong>Nalazuri Travels</strong>, we go beyond creating
            extraordinary journeys—we ensure they leave a positive impact.
            Through our commitment to sustainability, we proudly collaborate
            with two key initiatives:
            <strong> Travel Green, Plant a Tree</strong>, which promotes
            environmental conservation through
            <strong> tree planting</strong>, and{" "}
            <strong>Travel for Change</strong>.
          </p>
        </div>
      </div>
      {/*Blog-Section*/}
      <section className="blog-section">
        <h2 className="blog-title">BLOG</h2>
        <div className="blog-images">
            <div className="blog-images">
              <img src={Blog1} alt="Blog 1" className="blog-img" />
              <img src={Blog2} alt="Blog 2" className="blog-img main-img" />
              <img src={Blog3} alt="Blog 3" className="blog-img" />
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
