import React from 'react';
import './Lamu.css'; // Import your CSS file for styling
import LamuPhotoCover from '../assets/Lamu Photo Cover .jpg'; 
import Lamu1 from '../assets/Lamu 1.jpg'; 
import Lamu2 from '../assets/Lamu 2.jpg';
import Lamu3 from '../assets/Lamu 3.jpg';
import Lamu4 from '../assets/Lamu 4.jpg'; 
import Lamu5 from '../assets/Lamu 5.jpg'; 
import LamuPhoto6 from '../assets/Lamu photo 6.jpg';
import LamuPhoto7 from '../assets/Lamu Photo 7.jpg';
import LamuPhoto10 from '../assets/Lamu photo 10.jpg';
import LamuStreet8 from '../assets/Lamu street 8.jpg';
import LamuOldtown9 from '../assets/Lamu Old town 9.jpg';

const Lamu = () => {
  return (
    <div className="lamu">
      {/* Cover Photo Section */}
      <div 
        className="hero-section-lamu" 
        style={{ backgroundImage: `url(${LamuPhotoCover})` }} 
        
      >
        {/* Empty div for background image display */}
      </div>

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">Lamu – A Step Back in Time</h1>
      </header>

      {/* Description Section */}
      <section className="description" aria-label="Description about Lamu">
        <p>
          A UNESCO World Heritage Site, Lamu is Kenya’s oldest Swahili settlement, where history comes alive in its labyrinth of narrow alleyways, ancient coral stone houses, and beautifully carved wooden doors. The island moves at its own tranquil pace—there are no cars, only donkeys and dhows gliding across the Indian Ocean. Whether you're exploring the historic Lamu Old Town, sailing at sunset, or indulging in authentic Swahili cuisine, Lamu offers an experience steeped in culture and charm.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Lamu photo gallery">
        <h2 className="gallery-title">Lamu Gallery</h2>
        <div className="image-gallery">
          <img src={Lamu1} alt="Narrow alley in Lamu" />
          <img src={Lamu2} alt="Traditional Swahili architecture in Lamu" />
          <img src={Lamu3} alt="Sunset view in Lamu" />
          <img src={Lamu4} alt="Lamu beach" />
          <img src={Lamu5} alt="Local market in Lamu" />
          <img src={LamuPhoto6} alt="Cultural event in Lamu" />
          <img src={LamuPhoto7} alt="Lamu street scene" />
          <img src={LamuPhoto10} alt="Lamu waterfront" />
          <img src={LamuStreet8} alt="Street view in Lamu" />
          <img src={LamuOldtown9} alt="Historic buildings in Lamu Old Town" />
        </div>
      </section>
    </div>
  );
};

export default Lamu;
