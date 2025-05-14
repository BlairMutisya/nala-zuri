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
      <div className="cover-photo-container">
        <img src={CoverPhoto} alt="Nairobi National Park" className="cover-image" />
      </div>
      <h1>Nairobi National Park – Where Wilderness Meets the City</h1>
      <p>
        Just a stone’s throw from Kenya’s bustling capital, Nairobi National Park is a unique safari destination where skyscrapers form the backdrop to untamed wilderness. As the only national park in the world located within a capital city, it offers an extraordinary blend of urban convenience and raw African beauty.
      </p>
      <p>
        Home to an incredible variety of wildlife, including lions, leopards, rhinos, giraffes, and over 400 bird species, the park provides an authentic safari experience without leaving Nairobi. Visitors can embark on game drives, explore scenic walking trails, or visit the David Sheldrick Wildlife Trust, where orphaned elephants are rehabilitated.
      </p>
      <h2>Nairobi Gallery</h2>
      <div className="image-gallery">
        <img src={Nairobi1} alt="Nairobi 1" />
        <img src={Nairobi2} alt="Nairobi 2" />
        <img src={Nairobi3} alt="Nairobi 3" />
        <img src={Nairobi4} alt="Nairobi 4" />
        <img src={Nairobi5} alt="Nairobi 5" />
        <img src={Nairobi6} alt="Nairobi 6" />
        <img src={NairobiGallery2} alt="Nairobi Gallery 2" />
        <img src={NairobiGallery3} alt="Nairobi Gallery 3" />
        <img src={NairobiGallery4} alt="Nairobi Gallery 4" />
    
      </div>
    </div>
  );
};

export default Nairobi;