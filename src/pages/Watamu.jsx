import React from 'react';
import Footer from "../components/Footer";
import './Watamu.css';
import CoverPhoto from '../assets/Watamu cover photo.jpg';
import Watamu1 from '../assets/Watamu 1.jpg';
import Watamu2 from '../assets/Watamu 2.jpg';
import Watamu3 from '../assets/Watamu 3.jpg';
import Watamu4 from '../assets/Watamu 4.jpg';
import Watamu5 from '../assets/Watamu 5.jpg';
import Watamu6 from '../assets/Watamu 6.jpg';
import WatamuGallery1 from '../assets/Watamu gallery 1.jpg';
// import Watamu7 from '../assets/Watamu 7.jpg';

const Watamu = () => {
  return (
    <div className="watamu">
      {/* Hero Section */}
      <div
        className="hero-section-watamu"
        style={{ backgroundImage: `url(${CoverPhoto})` }}
        aria-label="Cover photo of Watamu Beach"
      >
        {/* Empty div for background image */}
      </div>

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">Watamu – A Marine Wonderland</h1>
      </header>

      {/* Description Section */}
      <section className="wordings" aria-label="Description about Watamu">
        <p>
          Nestled along a stunning stretch of coastline, Watamu is a haven for ocean lovers and nature enthusiasts. Its marine park, a UNESCO Biosphere Reserve, is home to vibrant coral reefs, sea turtles, and diverse marine life, making it a top destination for snorkeling and diving.
          Beyond the water, explore the ancient Gede Ruins hidden within a lush coastal forest or relax in eco-luxury resorts that embrace sustainable tourism. Watamu is where tranquility meets adventure, offering a perfect balance for the discerning traveler.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Watamu photo gallery">
        <h2 className="gallery-title">Watamu Gallery</h2>
        <div className="image-gallery">
          <img src={Watamu1} alt="Watamu beach landscape" />
          <img src={Watamu2} alt="Snorkeling in Watamu" />
          <img src={Watamu3} alt="Marine life in Watamu" />
          <img src={Watamu4} alt="Gede Ruins Watamu" />
          <img src={Watamu5} alt="Watamu coral reef" />
          <img src={Watamu6} alt="Watamu coastline" />
          <img src={WatamuGallery1} alt="Watamu scenic view" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Watamu;
