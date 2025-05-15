import React from 'react';
import './LakeNakuru.css'; 
import CoverPhoto from '../assets/Lake Nakuru cover photo.jpg'; 
import LakeNakuru1 from '../assets/Lake Nakuru 1.jpg'; 
import LakeNakuru2 from '../assets/Lake Nakuru 2.jpg';
import LakeNakuru3 from '../assets/Lake Nakuru 3.jpg';
import LakeNakuru4 from '../assets/Lake Nakuru 4.jpg';
import LakeNakuru5 from '../assets/Lake Nakuru 5.jpg'; 
import LakeNakuru6 from '../assets/Lake Nakuru 6.jpg'; 
import LakeNakuruGallery1 from '../assets/Lake Nakuru Gallery 1.jpg'; 
import LakeNakuruGallery2 from '../assets/Lake Nakuru Gallery 2.jpg'; 
import LakeNakuruGallery3 from '../assets/Lake Nakuru Gallery 3.jpg'; 
import LakeNakuruGallery4 from '../assets/Lake Nakuru Gallery 4.jpg'; 
import LakeNakuruGallery5 from '../assets/Lake Nakuru Gallery 5.jpg'; 
import LakeNakuruGallery6 from '../assets/Lake Nakuru Gallery 6.jpg'; 

const LakeNakuru = () => {
  return (
    <div className="lake-nakuru">
      {/* Hero Section */}
      <div 
        className="hero-section-lake-nakuru" 
        style={{ backgroundImage: `url(${CoverPhoto})` }} 
        aria-label="Cover photo of Lake Nakuru"
      >
        {/* Empty div for background image */}
      </div>

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">Lake Nakuru National Park – A Birdwatcher’s Paradise</h1>
      </header>

      {/* Description Section */}
      <section className="description" aria-label="Description about Lake Nakuru">
        <p>
          Famous for its alkaline lake and spectacular flamingo populations, Lake Nakuru National Park is a must-visit for bird enthusiasts and nature lovers. The park is also a key rhino sanctuary, home to both black and white rhinos, as well as tree-climbing lions, leopards, and Rothschild’s giraffes. The picturesque landscape, with acacia woodlands and waterfalls, makes it one of the most scenic parks in Kenya.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Lake Nakuru photo gallery">
        <h2 className="gallery-title">Lake Nakuru Gallery</h2>
        <div className="image-gallery">
          <img src={LakeNakuru1} alt="Flamingos at Lake Nakuru" />
          <img src={LakeNakuru2} alt="Rhinos grazing near the lake" />
          <img src={LakeNakuru3} alt="Scenic landscape of Lake Nakuru" />
          <img src={LakeNakuru4} alt="Acacia trees in the park" />
          <img src={LakeNakuru5} alt="Birdwatching spot at Lake Nakuru" />
          <img src={LakeNakuru6} alt="Wildlife at Lake Nakuru" />
          <img src={LakeNakuruGallery1} alt="Waterfall inside the park" />
          <img src={LakeNakuruGallery2} alt="View from lookout point" />
          <img src={LakeNakuruGallery3} alt="Lake Nakuru at sunset" />
          <img src={LakeNakuruGallery4} alt="Close-up of flamingos" />
          <img src={LakeNakuruGallery5} alt="Rothschild’s giraffes" />
          <img src={LakeNakuruGallery6} alt="Park terrain and sky" />
        </div>
      </section>
    </div>
  );
};

export default LakeNakuru;
