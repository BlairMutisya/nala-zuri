import React from 'react';
import './Destinations.css'; 
import Coverphoto from '../assets/Samburu Cover photo.jpg';
import Samburu1 from '../assets/Samburu 1.jpg'; 
import Samburu2 from '../assets/Samburu 2.jpg';
import Samburu3 from '../assets/Samburu 3.jpg';
import Samburu4 from '../assets/Samburu 4.jpg';
import Samburu5 from '../assets/Samburu 5.jpg';
import Samburu6 from '../assets/Samburu 6.jpg'; 
import SamburuGallery1 from '../assets/Samburu Gallery 1.jpg'; 
import SamburuGallery2 from '../assets/Samburu Gallery 2.jpg'; 
import SamburuGallery3 from '../assets/Samburu Gallery 3.jpg'; 
import SamburuGallery4 from '../assets/Samburu Gallery 4.jpg'; 
import SamburuGallery5 from '../assets/Samburu Gallery 5.jpg'; 

const Samburu = () => {
  return (
    <div className="samburu">
      <div className="cover-photo-container">
        <img src={Coverphoto} alt="Samburu National Reserve" className="cover-image" />
      </div>
      <h1>Samburu National Reserve – Untamed Wilderness in Northern Kenya</h1>
      <p>
        Located along the Ewaso Nyiro River in Kenya’s arid north, Samburu National Reserve offers a unique safari experience with wildlife species not commonly found in other parks. The reserve is home to the "Samburu Special Five": the Grevy’s zebra, reticulated giraffe, Beisa oryx, Somali ostrich, and gerenuk (the long-necked antelope that stands on its hind legs to feed). It’s also a great place to spot leopards, African wild dogs, and elephants cooling off by the riverbanks.
      </p>
      <h2>Samburu Gallery</h2>
      <div className="image-gallery">
        <img src={Samburu1} alt="Samburu 1" />
        <img src={Samburu2} alt="Samburu 2" />
        <img src={Samburu3} alt="Samburu 3" />
        <img src={Samburu4} alt="Samburu 4" />
        <img src={Samburu5} alt="Samburu 5" />
        <img src={Samburu6} alt="Samburu 6" />
        <img src={SamburuGallery1} alt="Samburu Gallery 1" />
        <img src={SamburuGallery2} alt="Samburu Gallery 2" />
        <img src={SamburuGallery3} alt="Samburu Gallery 3" />
        <img src={SamburuGallery4} alt="Samburu Gallery 4" />
        <img src={SamburuGallery5} alt="Samburu Gallery 5" />
      </div>
    </div>
  );
};

export default Samburu;