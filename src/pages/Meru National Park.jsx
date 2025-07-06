import React from 'react';
import Footer from "../components/Footer";
import './Meru.css'; 

import CoverPhoto from '../assets/Meru Cover Photo.jpg'; 
import Meru1 from '../assets/Meru 1.jpg'; 
import Meru2 from '../assets/Meru 2.jpg';
import Meru3 from '../assets/Meru 3.jpg';
import Meru6 from '../assets/Meru 6.jpg';
import Meru7 from '../assets/Meru 7.JPG';
import Meru8 from '../assets/Meru 8.jpg';
import Meru9 from '../assets/Meru 9.jpg';
import Meru10 from '../assets/Meru 10.JPG';
import MeruElephants from '../assets/Meru Elephants.jpg';

const galleryImages = [
  { src: Meru1, alt: "Scenic view in Meru National Park" },
  { src: Meru2, alt: "Wildlife including giraffes in Meru National Park" },
  { src: Meru3, alt: "Grasslands and hills in Meru National Park" },
  { src: Meru6, alt: "Meandering river in Meru National Park" },
  { src: Meru7, alt: "Sunset view in Meru National Park" },
  { src: Meru8, alt: "Lion in the wild at Meru National Park" },
  { src: Meru9, alt: "Bird species in Meru National Park" },
  { src: Meru10, alt: "Elephants roaming in Meru National Park" },
  { src: MeruElephants, alt: "Elephant herd in Meru National Park" },
];

const Meru = () => {
  return (
    <div className="meru-national-park">
      {/* Hero Section */}
      <section 
        className="hero-section-meru" 
        style={{ backgroundImage: `url(${CoverPhoto})` }} 
        aria-label="Cover photo of Meru National Park"
      />

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">Meru National Park – Kenya’s Untamed Wilderness</h1>
      </header>

      {/* Description Section */}
      <section className="wordings" aria-label="Description of Meru National Park">
        <p>
          Nestled in the heart of eastern Kenya, Meru National Park is a hidden gem offering breathtaking landscapes, diverse wildlife, and a truly authentic safari experience. Spanning 870 square kilometers, this unspoiled wilderness is home to the Big Five, rare species like Grevy’s zebra and reticulated giraffe, and over 400 bird species.
        </p>
        <p>
          Famous as the setting of <em>Born Free</em>, the story of Elsa the lioness, Meru is rich in both history and conservation efforts, including a dedicated Rhino Sanctuary. With lush savannahs, meandering rivers, and dramatic hills, the park provides an exclusive, crowd-free adventure—perfect for travelers seeking a wild, off-the-beaten-path experience.
        </p>
        <p>
          Experience untamed beauty, abundant wildlife, and sustainable tourism at Meru National Park—one of Kenya’s best-kept safari secrets!
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Meru National Park photo gallery">
        <h2 className="gallery-title">Meru Gallery</h2>
        <div className="image-gallery">
          {galleryImages.map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Meru;
