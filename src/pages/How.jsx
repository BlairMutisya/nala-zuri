import React from "react";
// import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./How.css";
import SoloAdventures from "../assets/SoloAdventures.jpg";
import Itineraries from "../assets/Itineraries.jpg";

const HowToExplore = () => {
  return (
    <div className="how-to-explore">
      {/* <Navbar /> */}
      {/* Hero Section */}
      <div className="hero-section-how">
        <div className="hero-overlay-how">
          <h1>How to Explore</h1>
          {/* <button className="explore-btn">Start Exploring</button> */}
        </div>
      </div>
      <p className="explore-description">
        Discover Kenya with Nalazuri! Whether you're planning a curated
        itinerary, embarking on a solo adventure, or exploring hidden gems, we
        make every journey seamless. Let us craft unforgettable experiences
        tailored just for you.
      </p>

      {/* Curated Itineraries */}
      <div className="section curated-itineraries">
        <img
          src={Itineraries}
          alt="Curated Itineraries"
          className="section-image"
        />
        <div className="section-content">
          <h2>Curated Itineraries</h2>
          <p>
            Plan your perfect getaway with our expertly crafted itineraries!
            Start by generating an estimated invoice based on your preferred
            destinations, travel dates, and experiences with the{" "}
            <strong>NALAZURI</strong>. If you love what you see, reach out to
            our friendly team, and we’ll refine every detail to create a
            seamless, personalized itinerary just for you. Whether it’s a luxury
            safari, a cultural exploration, or an off-the-beaten-path adventure,
            we ensure every trip is uniquely tailored to your needs.
          </p>
          {/* <button className="cta-btn">Generate Your Invoice</button> */}
        </div>
      </div>

      {/* Solo Adventures */}
      <div className="section solo-adventures">
        <img
          src={SoloAdventures}
          alt="Solo Adventures"
          className="section-image"
        />
        <div className="section-content">
          <h2>Solo Adventures</h2>
          <p>
            Exploring alone? We’ve got you covered!{" "}
            <strong>Our Solo Travel Calendar</strong> is designed to help
            independent travelers experience the best of Kenya throughout the
            year. We’ve carefully curated safari destinations based on the best
            times to visit each park, ensuring you make the most of your
            journey. Whether you're looking for a group to join or a structured
            solo-friendly itinerary, you’ll find the perfect adventure waiting
          </p>
          {/* <button className="cta-btn">View Travel Calendar</button> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowToExplore;
