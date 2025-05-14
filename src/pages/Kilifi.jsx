import React from 'react';
import './Destinations.css'; 
import CoverPhoto from '../assets/Kilifi cover photo.jpg'; 
import Kilifi1 from '../assets/Kilifi 1.jpg'; 
import Kilifi2 from '../assets/Kilifi 2.jpg';
import Kilifi3 from '../assets/Kilifi 3.jpg';
import Kilifi4 from '../assets/Kilifi 4.jpg'; 
import Kilifi5 from '../assets/Kilifi 5.jpg'; 
import Kilifi6 from '../assets/Kilifi 6.jpg';
import Kilifi7 from '../assets/Kilifi 7.jpg';
import Kilifi8 from '../assets/Kilifi 8.jpg';

const Kilifi = () => {
  return (
    <div className="kilifi">
      {/* Hero Section */}
      <div 
        className="hero-section" 
        style={{ backgroundImage: `url(${CoverPhoto})` }} 
        aria-label="Cover photo of Kilifi Beach"
      >
        {/* Empty div for background image */}
      </div>

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">Kilifi – A Hidden Coastal Gem</h1>
      </header>

      {/* Description Section */}
      <section className="description" aria-label="Description about Kilifi">
        <p>
          Kilifi is a destination for those seeking a blend of coastal serenity and cultural vibrancy. The town is known for its breathtaking creek, lined with mangroves and dotted with traditional dhow boats, making it ideal for sailing, kayaking, and sunset cruises. Beyond its natural beauty, Kilifi is a creative and cultural hub, hosting events like the renowned Kilifi New Year Festival. With its laid-back charm and secluded beaches, Kilifi is a perfect escape for those looking to connect with both nature and the local artistic spirit.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Kilifi photo gallery">
        <h2 className="gallery-title">Kilifi Gallery</h2>
        <div className="image-gallery">
          <img src={Kilifi1} alt="Kilifi creek view" />
          <img src={Kilifi2} alt="Sunset over Kilifi dhow" />
          <img src={Kilifi3} alt="Mangrove forest along the creek" />
          <img src={Kilifi4} alt="Kilifi beach shoreline" />
          <img src={Kilifi5} alt="Locals sailing traditional dhow" />
          <img src={Kilifi6} alt="Kayaking on Kilifi creek" />
          <img src={Kilifi7} alt="Kilifi cultural gathering" />
          <img src={Kilifi8} alt="Peaceful beach scene in Kilifi" />
        </div>
      </section>
    </div>
  );
};

export default Kilifi;
