import React from 'react';
import './Destinations.css'; 
import CoverPhoto from '../assets/Amboseli Cover Photo.jpeg'; 
import Amboseli1 from '../assets/Amboseli 1.jpeg'; 
import Amboseli2 from '../assets/Amboseli 2.jpg';
import Amboseli3 from '../assets/Amboseli 3.jpg';
import Amboseli4 from '../assets/Amboseli 4.jpg';
import Amboseli5 from '../assets/Amboseli 5.jpg'; 
//import AmboseliGalary1 from '../assets/Amboseli Galary 1.jpg'; 
import AmboseliGallery2 from '../assets/Amboseli Gallery 2.jpeg'; 
import AmboseliGallery3 from '../assets/Amboseli Gallery 3.jpeg'; 
import AmboseliGallery4 from '../assets/Amboseli Gallery 4.jpeg'; 
import AmboseliGallery6 from '../assets/Amboseli Gallery 6.jpg'; 
import Amboseligallery5 from '../assets/Amboseli gallery 5.jpg'; 

const Amboseli = () => {
  return (
    <div className="amboseli">
      <img src={CoverPhoto} alt="Amboseli National Park" className="cover-image" /> 
      <h1>Amboseli National Park – The Land of Giants</h1>
      <p>
        Set against the majestic backdrop of Mount Kilimanjaro, Amboseli is famous for its large herds of elephants, some of the biggest in Africa. The park’s open plains, swamps, and woodlands provide a perfect setting for spotting diverse wildlife, including buffaloes, giraffes, zebras, and numerous bird species. Photographers and nature lovers are drawn to Amboseli for its dramatic landscapes and iconic elephant shots with Kilimanjaro in the background.
      </p>
      <div className="image-gallery">
        <img src={Amboseli1} alt="Amboseli" />
        <img src={Amboseli2} alt="Amboseli" />
        <img src={Amboseli3} alt="Amboseli" />
        <img src={Amboseli4} alt="Amboseli" />
        <img src={Amboseli5} alt="Amboseli" />
        
        <img src={AmboseliGallery2} alt="Amboseli Gallery 2" />
        <img src={AmboseliGallery3} alt="Amboseli Gallery 3" />
        <img src={AmboseliGallery4} alt="Amboseli Gallery 4" />
        <img src={Amboseligallery5} alt="Amboseli gallery 5" />
        <img src={AmboseliGallery6} alt="Amboseli Gallery 6" />
      </div>
    </div>
  );
};

export default Amboseli;