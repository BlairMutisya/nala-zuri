import React from "react";
import "./OurStory.css";
// import storyImage from "../assets/Story.jpg";
// import safariImage from "../assets/safari-lodge.jpg";
import MercyImage from "../assets/MERCY & TERESA CO FOUNDERS.jpeg";
// import TeresaImage from "../assets/profile-placeholder.jpg";
import RoseImage from "../assets/Rose.jpg";
import GloriaImage from "../assets/Gloria.jpg";
import Footer from "../components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const OurStory = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="our-story">
        <div className="overlay">
          <h1>Our Story</h1>
          <p>Passion for Travel, Driven by Adventure</p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="story-container">
        <div className="story-content">
          {/* Text Section */}
          <div className="story-text">
            <h2>OUR STORY – Passion for Travel, Driven by Adventure</h2>
            <p>
              At Nala Zuri, we don't just curate trips—we aim to create
              unforgettable experiences! We are a team of adventurous,
              travel-obsessed explorers who believe that every journey should be
              meaningful.
            </p>
            <p>
              With a deep love for Kenya, we're here to craft the perfect
              trip—whether it's a thrilling safari, a cultural escape, or an
              off-the-beaten-path adventure. Our goal is simple: to give you the
              best travel experience, filled with excitement, authenticity, and
              seamless planning.
            </p>

            {/* Quote Box */}
            <div className="quote-box">
              <p>
                <i>
                  "Travel with purpose—experience Kenya and make a difference!"
                </i>
              </p>
            </div>
          </div>

          {/* Images Section */}
          <div className="story-images">
            <img
              src={require("../assets/Story.jpg")}
              alt="Cultural Experience"
            />
            <img src={require("../assets/safari.jpg")} alt="Safari" />
          </div>
        </div>
      </section>
      <section className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-container">
          {/* Team Member 1 */}
          <div className="team-card">
            <img src={MercyImage} alt="Mercy Wanjiku " className="team-img" />
            <div className="team-info">
              <h3>Mercy Wanjiku & Teresa Palacios</h3>
              <p className="role">CO-Founders</p>
              <p>
              Visionary leaders with a deep passion for travel. They founded
                Nalazuri Travels to create meaningful travel experiences that
                connect people with nature, culture, and local communities. They
                are committed to sustainable tourism and ensuring that every
                journey has a positive impact.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          {/* <div className="team-card">
            <img
              src={TeresaImage}
              alt="Teresa Palacios"
              className="team-img"
            />
            <div className="team-info">
              <h3>Teresa Palacios </h3>
              <p className="role">CEO & Founder</p>
              <p>
                Teressa brings her expertise in travel planning and operations
                to ensure every trip runs smoothly. She is dedicated to
                delivering exceptional customer service and making sure every
                traveler enjoys a seamless, well-organized experience.
              </p>
            </div> */}
          {/* </div> */}

          {/* Team Member 3 */}
          <div className="team-card">
            <img src={RoseImage} alt="Rose Wavua" className="team-img" />
            <div className="team-info">
              <h3>Rose Wavua</h3>
              <p className="role">Travel Consultant</p>
              <p>
                Rose is an expert in crafting personalized travel experiences.
                Whether you need the perfect safari, a coastal retreat, or an
                off-the-beaten-path adventure, she has the knowledge and
                connections to make it happen.
              </p>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="team-card">
            <img src={GloriaImage} alt="Gloria Njoroge" className="team-img" />
            <div className="team-info">
              <h3>Gloria Njoroge</h3>
              <p className="role"> Travel Consultant</p>
              <p>
                Gloria specializes in curating unique travel experiences with a
                focus on adventure and cultural immersion. She loves helping
                travelers explore Kenya’s hidden gems while ensuring responsible
                tourism practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-section">
        <div className="container">
          {/* Heading Section */}
          <div className="text-center">
            <h2 className="title">Why Choose Nala Zuri Travels?</h2>
            <p className="description2">
              We go beyond ordinary travel—we create unforgettable experiences
              that blend adventure, conservation, and community impact. Whether
              you're exploring Kenya's hidden gems or embarking on a classic
              safari, we ensure every journey is immersive, responsible, and
              tailored just for you.
            </p>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            {/* Authentic Experiences */}
            <div className="feature-card">
              <div className="icon-bg amber-bg"></div>
              <i className="fas fa-compass feature-icon amber-icon"></i>
              <h3>Authentic & Unique Experiences</h3>
              <p>
                Handpicked destinations and personalized itineraries that create
                lasting memories.
              </p>
            </div>

            {/* Sustainable Travel */}
            <div className="feature-card">
              <div className="icon-bg green-bg"></div>
              <i className="fas fa-leaf feature-icon green-icon"></i>
              <h3>Sustainable Travel</h3>
              <p>
                Explore while giving back to communities and preserving nature
                for future generations.
              </p>
            </div>

            {/* Expert Guides */}
            <div className="feature-card">
              <div className="icon-bg blue-bg"></div>
              <i className="fas fa-users feature-icon blue-icon"></i>
              <h3>Our Drivers & Guides</h3>
              <p>
               At Nalazuri, your safari is led by professional driver-guides who combine expert driving with deep knowledge of
               Kenya’s wildlife and terrain. Polite, punctual, and passionate, they ensure your safety and comfort
              while offering rich insights and spotting wildlife others often miss.
              </p>
            </div>

            {/* Seamless Planning */}
            <div className="feature-card">
              <div className="icon-bg purple-bg"></div>
              <i className="fas fa-calendar-check feature-icon purple-icon"></i>
              <h3>Seamless Planning</h3>
              <p>
                Stress-free travel with our expert assistance from start to
                finish.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurStory;
