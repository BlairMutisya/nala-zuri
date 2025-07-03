import React from 'react';
import Footer from "../components/Footer";
import './Samburu National Reserve.css'; 
import CoverPhoto from '../assets/CoverPhoto.jpeg';
import Samburu1 from '../assets/Samburu 1.jpg'; 
//import Samburu2 from '../assets/Samburu 2.jpg';
import Samburu3 from '../assets/Samburu 3.jpg';
import Samburu4 from '../assets/Samburu 4.jpg';
//import Samburu5 from '../assets/Samburu 5.jpg';
import Samburu6 from '../assets/Samburu 6.jpg'; 
import Samburu8 from '../assets/Samburu 8.jpg';
import Samburu9 from '../assets/Samburu 9.jpeg';

import SamburuGallery1 from '../assets/Samburu Gallery 1.jpg'; 
import SamburuGallery2 from '../assets/Samburu Gallery 2.jpg'; 
import SamburuGallery3 from '../assets/Samburu Gallery 3.jpg'; 
import SamburuGallery4 from '../assets/Samburu Gallery 4.jpg'; 
import SamburuGallery5 from '../assets/Samburu Gallery 5.jpg'; 

const Samburu = () => {
  return (
    <div className="samburu">
      {/* Hero Section */}
      <div 
        className="hero-section" 
        style={{ backgroundImage: `url(${CoverPhoto})` }} 
        aria-label="Cover photo of Samburu National Reserve"
      />

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">Samburu National Reserve – Untamed Wilderness in Northern Kenya</h1>
      </header>

      {/* Description Section */}
      <section className="wordings" aria-label="Description of Samburu National Reserve">
        <p>
          Located along the Ewaso Nyiro River in Kenya’s arid north, Samburu National Reserve offers a unique safari experience with wildlife species not commonly found in other parks. The reserve is home to the "Samburu Special Five": the Grevy’s zebra, reticulated giraffe, Beisa oryx, Somali ostrich, and gerenuk (the long-necked antelope that stands on its hind legs to feed). It’s also a great place to spot leopards, African wild dogs, and elephants cooling off by the riverbanks.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Samburu National Reserve photo gallery">
        <h2 className="gallery-title">Samburu Gallery</h2>
        <div className="image-gallery">
          <img src={Samburu1} alt="Samburu 1" />
          {/* <img src={Samburu2} alt="Samburu 2" /> */}
          <img src={Samburu3} alt="Samburu 3" />
          <img src={Samburu4} alt="Samburu 4" />
          {/* <img src={Samburu5} alt="Samburu 5" /> */}
          <img src={Samburu6} alt="Samburu 6" />
          <img src={Samburu8} alt="Samburu 8" />
          <img src={Samburu9} alt="Samburu 9" />
          <img src={SamburuGallery1} alt="Samburu Gallery 1" />
          <img src={SamburuGallery2} alt="Samburu Gallery 2" />
          <img src={SamburuGallery3} alt="Samburu Gallery 3" />
          <img src={SamburuGallery4} alt="Samburu Gallery 4" />
          <img src={SamburuGallery5} alt="Samburu Gallery 5" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Samburu;
