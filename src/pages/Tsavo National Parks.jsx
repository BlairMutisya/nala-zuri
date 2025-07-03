import React from 'react';
import Footer from "../components/Footer";
import './Tsavo.css'; 
import TsavoCoverPhoto from '../assets/Tsavo Cover Photo.jpeg';
import Tsavo1 from '../assets/Tsavo 1.jpg'; 
import Tsavo2 from '../assets/Tsavo 2.jpg';
import Tsavo3 from '../assets/tsavo 3.jpg';
import Tsavo4 from '../assets/Tsavo 4.jpg';
import Tsavo6 from '../assets/Tsavo 6.JPG'; 
import TsavoGallery1 from '../assets/Tsavo Gallery 1.jpg'; 
import TsavoGallery2 from '../assets/Tsavo Gallery 2.jpg'; 
import TsavoGallery3 from '../assets/Tsavo gallery 3.jpg';
import TsavoGallery4 from '../assets/Tsavo Gallery 4.jpg'; 
import TsavoGallery5 from '../assets/Tsavo gallery 5.jpg'; 
import TsavoGallery6 from '../assets/Tsavo gallery 6.jpg';

const Tsavo = () => {
  return (
    <div className="tsavo">
      {/* Hero Section */}
      <div 
        className="hero-section-tsavo"
        style={{ backgroundImage: `url(${TsavoCoverPhoto})` }}
        aria-label="Cover photo of Tsavo National Park"
      >
        {/* Background image set via CSS */}
      </div>

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">
          Tsavo National Parks (East & West) – Kenya’s Largest Wilderness
        </h1>
      </header>

      {/* Description Section */}
      <section className="wordings" aria-label="Description about Tsavo">
        <p>
          Spanning over 22,000 square kilometers, Tsavo East and Tsavo West National Parks form Kenya’s largest conservation area, famous for its rugged terrain, lava flows, and red-dust elephants. Tsavo East is known for its vast open spaces and large herds of elephants, while Tsavo West offers stunning scenery with volcanic hills, Mzima Springs (where you can see hippos and crocodiles underwater), and diverse birdlife. The parks are ideal for off-the-beaten-path safaris and thrilling wildlife encounters.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Tsavo photo gallery">
        <h2 className="gallery-title">Tsavo Gallery</h2>
        <div className="image-gallery">
          <img src={Tsavo1} alt="Elephants in Tsavo" />
          <img src={Tsavo2} alt="Vast savannah landscape" />
          <img src={Tsavo3} alt="Red-dust elephants" />
          <img src={Tsavo4} alt="Volcanic terrain" />
          <img src={Tsavo6} alt="Lush greenery near Mzima Springs" />
          <img src={TsavoGallery1} alt="Mzima Springs" />
          <img src={TsavoGallery2} alt="Herd near watering hole" />
          <img src={TsavoGallery3} alt="Hills of Tsavo West" />
          <img src={TsavoGallery4} alt="Giraffes at sunset" />
          <img src={TsavoGallery5} alt="Safari trail" />
          <img src={TsavoGallery6} alt="Panoramic view of Tsavo" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tsavo;
