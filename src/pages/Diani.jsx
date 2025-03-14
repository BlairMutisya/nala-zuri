import React from 'react';
import './Destinations.css'; 
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
      <div className="cover-photo-container">
        <img src={CoverPhoto} alt="Diani Beach" className="cover-image" />
      </div>
      <h1>Diani – The Quintessential Beach Escape</h1>
      <p>
        Diani Beach is the crown jewel of Kenya’s coastline—renowned for its powdery white sands, crystal-clear waters, and lush palm-fringed shores. This award-winning destination offers a mix of barefoot luxury and thrilling adventure, from kite surfing and deep-sea fishing to exploring the sacred Kaya Kinondo Forest. Whether you prefer a private beachfront villa, a luxury resort, or a quiet boutique retreat, Diani caters to travelers seeking the ultimate coastal indulgence.
      </p>
      <div className="image-gallery">
        <img src={Diani1} alt="Diani 1" />
        <img src={Diani2} alt="Diani 2" />
        <img src={Diani3} alt="Diani 3" />
        <img src={Diani4} alt="Diani 4" />
        <img src={Diani5} alt="Diani 5" />
        <img src={Diani6} alt="Diani 6" />
        <img src={Diani7} alt="Diani 7" />
      </div>
    </div>
  );
};

export default Diani;