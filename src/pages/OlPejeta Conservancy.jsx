import React from 'react';
import './Destinations.css'; 
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
      <div className="cover-photo-container">
        <img src={CoverPhoto} alt="Ol Pejeta Conservancy" className="cover-image" />
      </div>
      <h1>Ol Pejeta Conservancy – A Sanctuary for Endangered Wildlife</h1>
      <p>
        Located in Laikipia County, Ol Pejeta is a model for conservation efforts in Africa. It is home to the last two remaining northern white rhinos, Africa’s largest black rhino sanctuary, and a thriving population of lions, elephants, and cheetahs. Visitors can experience game drives, guided bush walks, and even behind-the-scenes conservation tours. The conservancy also hosts the Sweetwaters Chimpanzee Sanctuary, the only place in Kenya where you can see rescued chimpanzees.
      </p>
      <h2>Ol Pejeta Gallery</h2>
      <div className="image-gallery">
        <img src={Olpajeta1} alt="Ol Pejeta 1" />
        <img src={Olpajeta2} alt="Ol Pejeta 2" />
        <img src={Olpajeta3} alt="Ol Pejeta 3" />
        <img src={Olpajeta4} alt="Ol Pejeta 4" />
        <img src={Olpajeta6} alt="Ol Pejeta 6" />
        <img src={OlpajetaGallery4} alt="Ol Pejeta Gallery 4" />
        <img src={OlpajetaGallery6} alt="Ol Pejeta Gallery 6" />
        <img src={OlpajetaGallery7} alt="Ol Pejeta Gallery 7" />
        
      </div>
    </div>
  );
};

export default OlPejeta;