
import React from "react";
import SoloAdventures from "../assets/soloAdventures.JPG";
import Itineraries from "../assets/Itineraries.jpg";
import howToExplore from "../assets/HowToExplore.jpg";
import Footer from "../components/Footer";
import "./How.css";

const HowToExplore = () => {
  return (
    <div className="how-wrapper">
      {/* Hero Section */}
      <div
        className="hero-section-how"
        style={{ backgroundImage: `url(${howToExplore})` }}
      >
        <div className="hero-overlay-how">
          <h1>How to Explore</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="section-container">
        {/* Curated Itineraries */}
        <section className="itineraries-section">
          <div className="flex-row">
            <div className="half-width">
              <h2 className="section-title">Curated Itineraries</h2>
              <p className="section-paragraph">
                Plan your perfect getaway with our expertly crafted itineraries!
                Start by generating an estimated invoice based on your preferred
                destinations, travel dates, and experiences with the{" "}
                <strong>NALAZURI TRAVELS</strong>. If you love what you see,
                reach out to our friendly team, and we’ll refine every detail to
                create a seamless, personalized itinerary just for you. Whether
                it’s a luxury safari, a cultural exploration, or an
                off-the-beaten-path adventure, we ensure every trip is uniquely
                tailored to your needs.
              </p>
              <div className="bullet-list">
                <div className="bullet-item">
                  <i className="fas fa-map-marked-alt"></i>
                  <span>Expert-crafted routes</span>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-receipt"></i>
                  <span>Inquiries</span>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-user-check"></i>
                  <span>Personalized service</span>
                </div>
              </div>
              {/* <button className="primary-button">
                <span>Generate Estimated Invoice</span>
                <i className="fas fa-arrow-right"></i>
              </button> */}
            </div>
            <div className="half-width image-box">
              <img
                src={Itineraries}
                alt="Curated Safari Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Solo Adventures */}
        <section className="solo-adventures-section">
          <div className="flex-row reverse">
            <div className="half-width">
              <h2 className="section-title">Solo Adventures</h2>
              <p className="section-paragraph">
                Exploring alone? We’ve got you covered!{" "}
                <strong>Our Solo Travel Calendar</strong> is designed to help
                independent travelers experience the best of Kenya throughout
                the year. We’ve carefully curated safari destinations based on
                the best times to visit each park, ensuring you make the most of
                your journey. Whether you're looking for a group to join or a
                structured solo-friendly itinerary, you’ll find the perfect
                adventure waiting
              </p>
              <div className="bullet-list">
                <div className="bullet-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Travel Calendar</span>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-users"></i>
                  <span>Join a Group</span>
                </div>
                <div className="bullet-item">
                  <i className="fas fa-route"></i>
                  <span>Curated Routes</span>
                </div>
              </div>
              <a href="/calendar" target="_blank" rel="noopener noreferrer">
                <button className="primary-button">
                  <span>View Travel Calendar</span>
                  <i className="fas fa-calendar-alt ml-2"></i>
                </button>
              </a>

            </div>
            <div className="half-width image-box">
              <img
                src={SoloAdventures}
                alt="Solo Adventure Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          <div className="step-box">
            <div className="step-icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <h3>1. Choose Your Experience</h3>
            <p>
              Browse our curated itineraries or create your own custom adventure
              based on your interests and preferences.
            </p>
          </div>

          <div className="step-box">
            <div className="step-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>2. Consult With Experts</h3>
            <p>
              Our travel specialists will help refine your itinerary, answer
              questions, and provide insider recommendations.
            </p>
          </div>

          <div className="step-box">
            <div className="step-icon">
              <i className="fas fa-plane-departure"></i>
            </div>
            <h3>3. Embark on Adventure</h3>
            <p>
              Once everything is confirmed, pack your bags and get ready for an
              unforgettable Kenyan adventure!
            </p>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="call-to-action">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Whether you're seeking a curated experience or a solo adventure, we're
          here to make your Kenyan dream trip a reality.
        </p>
       
      </section>
      <Footer />
    </div>
    // </div>
  );
};

export default HowToExplore;
