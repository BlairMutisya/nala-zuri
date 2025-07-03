import React from 'react';
import Footer from "../components/Footer";

import './OlPejeta.css'; 
import CoverPhoto from '../assets/Olpejeta Cover Photo.jpg'; 
import Olpajeta1 from '../assets/Ol pajeta 1.jpg'; 
import Olpajeta2 from '../assets/Olpajeta 2.jpg';
import Olpajeta3 from '../assets/Olpajeta 3.jpg';
import Olpajeta4 from '../assets/Olpajeta 4.jpg';
import Olpajeta6 from '../assets/Olpajeta 6.jpg';
import OlpajetaGallery4 from '../assets/Olpajeta Gallery 4.jpg'; 
import OlpajetaGallery6 from '../assets/Olpajeta Gallery 6.jpg'; 
import OlpajetaGallery7 from '../assets/Olpajeta Gallery 7.jpg'; 

const OlPejeta = () => {
  return (
    <div className="ol-pejeta">
      {/* Hero Section */}
      <div 
        className="hero-section-ol-pejeta" 
        style={{ backgroundImage: `url(${CoverPhoto})` }} 
        aria-label="Cover photo of Ol Pejeta Conservancy"
      />

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">Ol Pejeta Conservancy – A Sanctuary for Endangered Wildlife</h1>
      </header>

      {/* Description Section */}
      <section className="wordings" aria-label="Description of Ol Pejeta Conservancy">
        <p>
          Located in Laikipia County, Ol Pejeta is a model for conservation efforts in Africa. It is home to the last two remaining northern white rhinos, Africa’s largest black rhino sanctuary, and a thriving population of lions, elephants, and cheetahs. Visitors can experience game drives, guided bush walks, and even behind-the-scenes conservation tours. The conservancy also hosts the Sweetwaters Chimpanzee Sanctuary, the only place in Kenya where you can see rescued chimpanzees.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Ol Pejeta Conservancy photo gallery">
        <h2 className="gallery-title">Ol Pejeta Gallery</h2>
        <div className="image-gallery">
          <img src={Olpajeta1} alt="Wildlife in Ol Pejeta Conservancy" />
          <img src={Olpajeta2} alt="Scenic view of Ol Pejeta Conservancy" />
          <img src={Olpajeta3} alt="Rhinos in Ol Pejeta Conservancy" />
          <img src={Olpajeta4} alt="Game drive in Ol Pejeta Conservancy" />
          <img src={Olpajeta6} alt="Elephants at Ol Pejeta Conservancy" />
          <img src={OlpajetaGallery4} alt="Ol Pejeta Gallery 4" />
          <img src={OlpajetaGallery6} alt="Cheetah sighting at Ol Pejeta" />
          <img src={OlpajetaGallery7} alt="Sweetwaters Chimpanzee Sanctuary" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OlPejeta;
