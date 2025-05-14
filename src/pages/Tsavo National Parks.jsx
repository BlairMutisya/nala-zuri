import React from 'react';
import './Destinations.css'; 
import TsavoCoverPhoto from '../assets/Tsavo Cover Photo.jpeg';
import Tsavo1 from '../assets/Tsavo 1.jpg'; 
import Tsavo2 from '../assets/Tsavo 2.jpg';
import tsavo3 from '../assets/tsavo 3.jpg';
import Tsavo4 from '../assets/Tsavo 4.jpg';
import Tsavo6 from '../assets/Tsavo 6.JPG'; 
import TsavoGallery1 from '../assets/Tsavo Gallery 1.jpg'; 
import TsavoGallery2 from '../assets/Tsavo Gallery 2.jpg'; 
import Tsavogallery3 from '../assets/Tsavo gallery 3.jpg';
import TsavoGallery4 from '../assets/Tsavo Gallery 4.jpg'; 
import Tsavogallery5 from '../assets/Tsavo gallery 5.jpg'; 
import Tsavogallery6 from '../assets/Tsavo gallery 6.jpg';

const Tsavo = () => {
  return (
    <div className="tsavo">
      <div className="cover-photo-container">
        <img src={TsavoCoverPhoto} alt="Tsavo National Park" className="cover-image" />
      </div>
      <h1>Tsavo National Parks (East & West) – Kenya’s Largest Wilderness</h1>
      <p>
        Spanning over 22,000 square kilometers, Tsavo East and Tsavo West National Parks form Kenya’s largest conservation area, famous for its rugged terrain, lava flows, and red-dust elephants. Tsavo East is known for its vast open spaces and large herds of elephants, while Tsavo West offers stunning scenery with volcanic hills, Mzima Springs (where you can see hippos and crocodiles underwater), and diverse birdlife. The parks are ideal for off-the-beaten-path safaris and thrilling wildlife encounters.
      </p>
      <h2>Tsavo Gallery</h2>
      <div className="image-gallery">
        <img src={Tsavo1} alt="Tsavo 1" />
        <img src={Tsavo2} alt="Tsavo 2" />
        <img src={tsavo3} alt="Tsavo 3" />
        <img src={Tsavo4} alt="Tsavo 4" />
        <img src={Tsavo6} alt="Tsavo 6" />
        <img src={TsavoGallery1} alt="Tsavo Gallery 1" />
        <img src={TsavoGallery2} alt="Tsavo Gallery 2" />
         <img src={Tsavogallery3} alt="Tsavo Gallery 3" /> 
        <img src={TsavoGallery4} alt="Tsavo Gallery 4" />
        <img src={Tsavogallery5} alt="Tsavo Gallery 5" />
        <img src={Tsavogallery6} alt="Tsavo Gallery 6" />
      </div>
    </div>
  );
};

export default Tsavo;