import React from 'react';
import './Destinations.css'; 
import MeruCoverPhoto from '../assets/Meru Cover Photo.jpg'; 
import Meru1 from '../assets/Meru 1.jpg'; 
import Meru2 from '../assets/Meru 2.jpg';
import Meru3 from '../assets/Meru 3.jpg';
import MeruElephants from '../assets/Meru Elephants.jpg'; 

const Meru = () => {
  return (
    <div className="meru-national-park">
      <div className="cover-photo-container">
        <img src={MeruCoverPhoto} alt="Meru National Park landscape" className="cover-image" />
      </div>
      <h1>Meru National Park – Kenya’s Untamed Wilderness</h1>
      <p>
        Nestled in the heart of eastern Kenya, Meru National Park is a hidden gem offering breathtaking landscapes, diverse wildlife, and a truly authentic safari experience. Spanning 870 square kilometers, this unspoiled wilderness is home to the Big Five, rare species like Grevy’s zebra and reticulated giraffe, and over 400 bird species.
      </p>
      <p>
        Famous as the setting of Born Free, the story of Elsa the lioness, Meru is rich in both history and conservation efforts, including a dedicated Rhino Sanctuary. With lush savannahs, meandering rivers, and dramatic hills, the park provides an exclusive, crowd-free adventure—perfect for travelers seeking a wild, off-the-beaten-path experience.
      </p>
      <p>
        Experience untamed beauty, abundant wildlife, and sustainable tourism at Meru National Park—one of Kenya’s best-kept safari secrets!
      </p>
      <h2>Meru Gallery</h2>
      <div className="image-gallery">
        <img src={Meru1} alt="Meru 1" />
        <img src={Meru2} alt="Meru 2" />
        <img src={Meru3} alt="Meru 3" />
        <img src={MeruElephants} alt="Elephants in Meru National Park" />
      </div>
    </div>
  );
};

export default Meru;