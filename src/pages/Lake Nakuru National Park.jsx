import React from 'react';
import './Destinations.css'; // Import your CSS file for styling
import coverphoto from '../assets/Lake Nakuru cover photo.jpg'; 
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
      <div className="cover-photo-container">
        <img src={coverphoto} alt="Lake Nakuru" className="cover-image" />
      </div>
      <h1>Lake Nakuru National Park – A Birdwatcher’s Paradise</h1>
      <p>
        Famous for its alkaline lake and spectacular flamingo populations, Lake Nakuru National Park is a must-visit for bird enthusiasts and nature lovers. The park is also a key rhino sanctuary, home to both black and white rhinos, as well as tree-climbing lions, leopards, and Rothschild’s giraffes. The picturesque landscape, with acacia woodlands and waterfalls, makes it one of the most scenic parks in Kenya.
      </p>
      <h2>Lake Nakuru National Park Gallery</h2>
      <div className="image-gallery">
        <img src={LakeNakuru1} alt="Lake Nakuru 1" />
        <img src={LakeNakuru2} alt="Lake Nakuru 2" />
        <img src={LakeNakuru3} alt="Lake Nakuru 3" />
        <img src={LakeNakuru4} alt="Lake Nakuru 4" />
        <img src={LakeNakuru5} alt="Lake Nakuru 5" />
        <img src={LakeNakuru6} alt="Lake Nakuru 6" />
        <img src={LakeNakuruGallery1} alt="Lake Nakuru Gallery 1" />
        <img src={LakeNakuruGallery2} alt="Lake Nakuru Gallery 2" />
        <img src={LakeNakuruGallery3} alt="Lake Nakuru Gallery 3" />
        <img src={LakeNakuruGallery4} alt="Lake Nakuru Gallery 4" />
        <img src={LakeNakuruGallery5} alt="Lake Nakuru Gallery 5" />
        <img src={LakeNakuruGallery6} alt="Lake Nakuru Gallery 6" />
      </div>
    </div>
  );
};

export default LakeNakuru;