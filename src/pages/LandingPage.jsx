import React from "react";
import "./LandingPage.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
// import Blog1 from "../assets/Blog1.JPG";
// import Blog2 from "../assets/Blog2.jpg";
// import Blog3 from "../assets/Blog3.jpg";
import SafariAdventures from "../assets/Safari Adventures.jpg"
import CoastalRetreats from "../assets/Coastal Retreats.jpg"
import CulturalImmersion from "../assets/Cultural Immersion.jpg"
import LuxuryStays from "../assets/Luxury Stays.jpg"

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
          <h2>WITH NALAZURI TRAVELS</h2>
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
      {/* <section className="blog-section">
        <h2 className="blog-title">BLOG</h2>
        <div className="blog-images">
            <div className="blog-images">
              <img src={Blog1} alt="Blog 1" className="blog-img" />
              <img src={Blog2} alt="Blog 2" className="blog-img main-img" />
              <img src={Blog3} alt="Blog 3" className="blog-img" />
            </div>
        </div>
      </section> */}
         <section className="featured-section">
      <div className="featured-container">
        <div className="featured-header">
          <h2 className="featured-title">FEATURED EXPERIENCES</h2>
          <p className="featured-subtitle">
            Discover our carefully curated selection of extraordinary adventures
          </p>
          <div className="featured-underline"></div>
        </div>

        <div className="featured-grid">
          {[
            {
              img: SafariAdventures,
              title: "Safari Adventures",
              desc: "Witness the majesty of African wildlife in their natural habitat",
            },
            {
              img: CoastalRetreats,
              title: "Coastal Retreats",
              desc: "Unwind in luxury along Kenya's pristine coastline",
            },
            {
              img: CulturalImmersion,
              title: "Cultural Immersion",
              desc: "Experience the rich traditions of Kenya's diverse cultures",
            },
            {
              img: LuxuryStays,
              title: "Luxury Stays",
              desc: "Indulge in world-class accommodations in stunning locations",
            },
          ].map((item, index) => (
            <div className="featured-card" key={index}>
              <div className="featured-overlay"></div>
              <img
                src={item.img}
                alt={item.title}
                className="featured-image"
              />
              <div className="featured-content">
                <h3 className="featured-card-title">{item.title}</h3>
                <p className="featured-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-footer">
          <button className="featured-main-button">VIEW ALL EXPERIENCES</button>
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
};

export default LandingPage;