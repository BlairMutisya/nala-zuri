import React from 'react';
import './Watamu.css'; 
import Watamucoverphoto from '../assets/Watamu cover photo.jpg'; 
import Watamu1 from '../assets/Watamu 1.jpg'; 
import Watamu2 from '../assets/Watamu 2.jpg';
import Watamu3 from '../assets/Watamu 3.jpg';
import Watamu4 from '../assets/Watamu 4.jpg';
import Watamu5 from '../assets/Watamu 5.jpg'; 
import Watamu6 from '../assets/Watamu 6.jpg'; 
import WatamuGallery1 from '../assets/Watamu gallery 1.jpg'; 
//import Watamu7 from '../assets/Watamu 7.jpg';

const Watamu = () => {
  return (
    <div className="watamu">
      {/* Cover photo section */}
      <div className="cover-photo-container">
        <img src={Watamucoverphoto} alt="Watamu beach" className="cover-image" />
      </div>

      {/* Page title */}
      <h1>Watamu – A Marine Wonderland</h1>

      {/* Description section */}
      <p>
        Nestled along a stunning stretch of coastline, Watamu is a haven for ocean lovers and nature enthusiasts. Its marine park, a UNESCO Biosphere Reserve, is home to vibrant coral reefs, sea turtles, and diverse marine life, making it a top destination for snorkeling and diving. Beyond the water, explore the ancient Gede Ruins hidden within a lush coastal forest or relax in eco-luxury resorts that embrace sustainable tourism. Watamu is where tranquility meets adventure, offering a perfect balance for the discerning traveler.
      </p>

      {/* Gallery section */}
      <h2>Watamu Gallery</h2>
      <div className="image-gallery">
        <img src={Watamu1} alt="Watamu 1" />
        <img src={Watamu2} alt="Watamu 2" />
        <img src={Watamu3} alt="Watamu 3" />
        <img src={Watamu4} alt="Watamu 4" />
        <img src={Watamu5} alt="Watamu 5" />
        <img src={Watamu6} alt="Watamu 6" />
        <img src={WatamuGallery1} alt="Watamu Gallery 1" />
      </div>
    </div>
  );
};

export default Watamu;
