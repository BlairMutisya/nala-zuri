import React from 'react';
import './Destinations.css'; 
import CoverPhoto from '../assets/Nairobi Cover Photo.jpeg'; 
import Nairobi1 from '../assets/Nairobi 1.jpg'; 
import Nairobi2 from '../assets/Nairobi 2.jpeg';
import Nairobi3 from '../assets/Nairobi 3.jpg';
import Nairobi4 from '../assets/Nairobi 4.jpg';
import Nairobi5 from '../assets/Nairobi 5.jpg'; 
import Nairobi6 from '../assets/Nairobi 6.jpg';
import NairobiGallery2 from '../assets/Nairobi Gallery 2.jpg'; 
import NairobiGallery3 from '../assets/Nairobi Gallery 3.jpg'; 
import NairobiGallery4 from '../assets/Nairobi Gallery 4.jpeg'; 

const Nairobi = () => {
  return (
    <div className="nairobi">
      {/* Hero Section */}
      <div 
        className="hero-section" 
        style={{ backgroundImage: `url(${CoverPhoto})` }} 
        aria-label="Cover photo of Nairobi National Park"
      />

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">Nairobi National Park – Where Wilderness Meets the City</h1>
      </header>

      {/* Description Section */}
      <section className="description" aria-label="Description of Nairobi National Park">
        <p>
          Just a stone’s throw from Kenya’s bustling capital, Nairobi National Park is a unique safari destination where skyscrapers form the backdrop to untamed wilderness. As the only national park in the world located within a capital city, it offers an extraordinary blend of urban convenience and raw African beauty.
        </p>
        <p>
          Home to an incredible variety of wildlife, including lions, leopards, rhinos, giraffes, and over 400 bird species, the park provides an authentic safari experience without leaving Nairobi. Visitors can embark on game drives, explore scenic walking trails, or visit the David Sheldrick Wildlife Trust, where orphaned elephants are rehabilitated.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Nairobi National Park photo gallery">
        <h2 className="gallery-title">Nairobi Gallery</h2>
        <div className="image-gallery">
          <img src={Nairobi1} alt="Wildlife in Nairobi National Park" />
          <img src={Nairobi2} alt="Nairobi National Park with city skyline" />
          <img src={Nairobi3} alt="Scenic view in Nairobi National Park" />
          <img src={Nairobi4} alt="Animals grazing in Nairobi National Park" />
          <img src={Nairobi5} alt="Sunset in Nairobi National Park" />
          <img src={Nairobi6} alt="Visitors on safari in Nairobi National Park" />
          <img src={NairobiGallery2} alt="Elephant at Nairobi National Park" />
          <img src={NairobiGallery3} alt="Rhino spotted in Nairobi National Park" />
          <img src={NairobiGallery4} alt="Savannah landscape in Nairobi National Park" />
        </div>
      </section>
    </div>
  );
};

export default Nairobi;
