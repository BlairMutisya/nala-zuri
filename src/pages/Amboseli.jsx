import React from 'react';
import Footer from "../components/Footer";

import './Amboseli.css'; // Import your CSS file for styling
import AmboseliCoverPhoto from '../assets/Amboseli Cover Photo.jpg'; 
import Amboseli1 from '../assets/Amboseli 1.jpg'; 
import Amboseli2 from '../assets/Amboseli 2.jpg';
import Amboseli3 from '../assets/Amboseli 3.jpg';
import Amboseli4 from '../assets/Amboseli 4.jpg';
import Amboseli5 from '../assets/Amboseli 5.jpg'; 
import Amboseli6 from '../assets/Amboseli 6.jpg';
import Amboseli7 from '../assets/Amboseli 7.jpg';
import AmboseliGallery2 from '../assets/Amboseli Gallery 2.jpg'; 
import AmboseliGallery3 from '../assets/Amboseli Gallery 3.jpeg'; 
import AmboseliGallery4 from '../assets/Amboseli Gallery 4.jpg'; 
import AmboseliGallery6 from '../assets/Amboseli Gallery 6.jpg'; 
import Amboseligallery5 from '../assets/Amboseli gallery 5.jpg'; 

const Amboseli = () => {
  return (
    <div className="amboseli">
      {/* Hero Section */}
      <div 
        className="hero-section-amboseli" 
        style={{ backgroundImage: `url(${AmboseliCoverPhoto})` }} 
        aria-label="Cover photo of Amboseli National Park"
      >
        {/* Empty div for background image */}
      </div>

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">Amboseli National Park – The Land of Giants</h1>
      </header>

      {/* Description Section */}
      <section className="wordings" aria-label="Description about Amboseli">
        <p>
          Set against the majestic backdrop of Mount Kilimanjaro, Amboseli is famous for its large herds of elephants, some of the biggest in Africa. The park’s open plains, swamps, and woodlands provide a perfect setting for spotting diverse wildlife, including buffaloes, giraffes, zebras, and numerous bird species. Photographers and nature lovers are drawn to Amboseli for its dramatic landscapes and iconic elephant shots with Kilimanjaro in the background.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Amboseli photo gallery">
        <h2 className="gallery-title">Amboseli Gallery</h2>
        <div className="image-gallery">
          <img src={Amboseli1} alt="Elephants in Amboseli" />
          <img src={Amboseli2} alt="Amboseli savannah" />
          <img src={Amboseli3} alt="Mount Kilimanjaro view" />
          <img src={Amboseli4} alt="Wildlife in Amboseli" />
          <img src={Amboseli5} alt="Birds in wetlands" />
          <img src={Amboseli6} alt="Lion in the Jungle" />
          <img src={Amboseli7} alt="Wild animals" />
          <img src={AmboseliGallery2} alt="Amboseli Gallery 2" />
          <img src={AmboseliGallery3} alt="Amboseli Gallery 3" />
          <img src={AmboseliGallery4} alt="Amboseli Gallery 4" />
          <img src={Amboseligallery5} alt="Amboseli gallery 5" />
          <img src={AmboseliGallery6} alt="Amboseli Gallery 6" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Amboseli;
