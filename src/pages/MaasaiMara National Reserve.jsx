import React from 'react';
import './Destinations.css'; 
import CoverPhoto from '../assets/Maasai Mara Cover photo.jpg'; 
import MaasaiMara1 from '../assets/Maasai Mara 1.jpeg'; 
import MaasaiMara2 from '../assets/Maasai Mara 2.jpg';
import MaasaiMara3 from '../assets/Maasai Mara 3.jpg';
import MaasaiMara4 from '../assets/Maasai Mara 4.jpg';
import MaasaiMara5 from '../assets/Maasai mara 5.jpg'; 
import MaasaiMaraGallery2 from '../assets/Maasai Mara Gallery 2.jpg'; 
import MaasaiMaraGallery3 from '../assets/Maasai Mara Gallery 3.jpeg'; 
import MaasaiMaraGallery4 from '../assets/Maasai Mara Gallery 4.jpeg'; 
import MaasaiMaraGallery5 from '../assets/Maasai Mara Gallery 5.jpeg'; 
import MaasaiMaraGallery6 from '../assets/Maasai Mara Gallery 6.jpg';

const MaasaiMara = () => {
  return (
    <div className="maasai-mara">
      {/* Hero Section */}
      <div 
        className="hero-section" 
        style={{ backgroundImage: `url(${CoverPhoto})` }} 
        aria-label="Cover photo of Maasai Mara"
      />

      {/* Title Section */}
      <header className="page-title-container" aria-label="Page title">
        <h1 className="page-title">Maasai Mara National Reserve – Witness the Great Migration</h1>
      </header>

      {/* Description Section */}
      <section className="description" aria-label="Description about Maasai Mara">
        <p>
          Arguably Kenya’s most famous wildlife destination, the Maasai Mara is known for its golden savannahs, abundant wildlife, and the spectacular Great Migration—where over two million wildebeest, zebras, and gazelles move in search of greener pastures, attracting predators like lions, cheetahs, and crocodiles. The reserve also offers hot air balloon safaris, cultural visits to Maasai villages, and some of the best big cat sightings in Africa.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" aria-label="Maasai Mara photo gallery">
        <h2 className="gallery-title">Maasai Mara Gallery</h2>
        <div className="image-gallery">
          <img src={MaasaiMara1} alt="Wildebeest herds in the Mara" />
          <img src={MaasaiMara2} alt="Lion resting in Maasai Mara" />
          <img src={MaasaiMara3} alt="Hot air balloon safari over Maasai Mara" />
          <img src={MaasaiMara4} alt="Cheetah on the prowl" />
          <img src={MaasaiMara5} alt="Maasai cultural experience" />
          <img src={MaasaiMaraGallery2} alt="Scenic view of Maasai Mara plains" />
          <img src={MaasaiMaraGallery3} alt="Elephants crossing in Maasai Mara" />
          <img src={MaasaiMaraGallery4} alt="Maasai Mara sunset" />
          <img src={MaasaiMaraGallery5} alt="Zebras grazing in Maasai Mara" />
          <img src={MaasaiMaraGallery6} alt="River crossing during migration" />
        </div>
      </section>
    </div>
  );
};

export default MaasaiMara;
