import React from 'react';
import './Diani.css';
import CoverPhoto from '../assets/Diani Cover Photo.jpg'; 
import Diani1 from '../assets/Diani 1.jpg'; 
import Diani2 from '../assets/Diani 2.jpg';
import Diani3 from '../assets/Diani 3.jpg';
import Diani4 from '../assets/Diani 4.jpg'; 
import Diani5 from '../assets/Diani 5.jpg';
import Diani6 from '../assets/Diani 6.jpg';
import Diani7 from '../assets/Diani 7.jpg';

const Diani = () => {
  return (
    <div className="diani">
      {/* Hero Section */}
      <div 
        className="hero-section-diani" 
        style={{ backgroundImage: `url(${CoverPhoto})` }} 
        aria-label="Cover photo of Diani Beach"
      >
        
      </div>

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">Diani – The Quintessential Beach Escape</h1>
      </header>

      {/* Description Section */}
      <section className="description" aria-label="Description about Diani">
        <p>
          Diani Beach is the crown jewel of Kenya’s coastline—renowned for its powdery white sands, crystal-clear waters, and lush palm-fringed shores. This award-winning destination offers a mix of barefoot luxury and thrilling adventure, from kite surfing and deep-sea fishing to exploring the sacred Kaya Kinondo Forest. Whether you prefer a private beachfront villa, a luxury resort, or a quiet boutique retreat, Diani caters to travelers seeking the ultimate coastal indulgence.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Diani photo gallery">
        <h2 className="gallery-title">Diani Gallery</h2>
        <div className="image-gallery">
          <img src={Diani1} alt="Diani Beach sunrise" />
          <img src={Diani2} alt="Aerial view of Diani coast" />
          <img src={Diani3} alt="Palm trees lining Diani Beach" />
          <img src={Diani4} alt="People enjoying the beach" />
          <img src={Diani5} alt="Luxury beachfront villa" />
          <img src={Diani6} alt="Traditional dhow on the water" />
          <img src={Diani7} alt="Secluded beach in Diani" />
        </div>
      </section>
    </div>
  );
};

export default Diani;
