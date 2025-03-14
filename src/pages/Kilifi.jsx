import React from 'react';
import './Destinations.css'; 
import coverphoto from '../assets/Kilifi cover photo.jpg'; 
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
      <div className="cover-photo-container">
        <img src={coverphoto} alt="Kilifi Beach" className="cover-image" />
      </div>
      <h1>Kilifi – A Hidden Coastal Gem</h1>
      <p>
        Kilifi is a destination for those seeking a blend of coastal serenity and cultural vibrancy. The town is known for its breathtaking creek, lined with mangroves and dotted with traditional dhow boats, making it ideal for sailing, kayaking, and sunset cruises. Beyond its natural beauty, Kilifi is a creative and cultural hub, hosting events like the renowned Kilifi New Year Festival. With its laid-back charm and secluded beaches, Kilifi is a perfect escape for those looking to connect with both nature and the local artistic spirit.
      </p>
      <div className="image-gallery">
        <img src={Kilifi1} alt="Kilifi 1" />
        <img src={Kilifi2} alt="Kilifi 2" />
        <img src={Kilifi3} alt="Kilifi 3" />
        <img src={Kilifi4} alt="Kilifi 4" />
        <img src={Kilifi5} alt="Kilifi 5" />
        <img src={Kilifi6} alt="Kilifi 6" />
        <img src={Kilifi7} alt="Kilifi 7" />
        <img src={Kilifi8} alt="Kilifi 8" />
      </div>
    </div>
  );
};

export default Kilifi;