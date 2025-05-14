import React from 'react';
import './Destinations.css'; 
import MaasaiMaraCoverphoto from '../assets/Maasai Mara Cover photo.jpg'; 
import MaasaiMara1 from '../assets/Maasai Mara 1.jpeg'; 
import MaasaiMara2 from '../assets/Maasai Mara 2.jpg';
import MaasaiMara3 from '../assets/Maasai Mara 3.jpg';
import MaasaiMara4 from '../assets/Maasai Mara 4.jpg';
import MaasaiMara5 from '../assets/Maasai mara 5.jpg'; 
//import MaasaiMaraGallery1 from '../assets/Maasai Mara Gallery 1.jpg'; 
import MaasaiMaraGallery2 from '../assets/Maasai Mara Gallery 2.jpg'; 
import MaasaiMaraGallery3 from '../assets/Maasai Mara Gallery 3.jpeg'; 
import MaasaiMaraGallery4 from '../assets/Maasai Mara Gallery 4.jpeg'; 
import MaasaiMaraGallery5 from '../assets/Maasai Mara Gallery 5.jpeg'; 
import MaasaiMaraGallery6 from '../assets/Maasai Mara Gallery 6.jpg';

const MaasaiMara = () => {
  return (
    <div className="maasai-mara">
      <div className="cover-photo-container">
        <img src={MaasaiMaraCoverphoto} alt="Maasai Mara landscape" className="cover-image" />
      </div>
      <h1>Maasai Mara National Reserve – Witness the Great Migration</h1>
      <p>
        Arguably Kenya’s most famous wildlife destination, the Maasai Mara is known for its golden savannahs, abundant wildlife, and the spectacular Great Migration—where over two million wildebeest, zebras, and gazelles move in search of greener pastures, attracting predators like lions, cheetahs, and crocodiles. The reserve also offers hot air balloon safaris, cultural visits to Maasai villages, and some of the best big cat sightings in Africa.
      </p>
      <h2>Maasai Mara Gallery</h2>
      <div className="image-gallery">
        <img src={MaasaiMara1} alt="Maasai Mara 1" />
        <img src={MaasaiMara2} alt="Maasai Mara 2" />
        <img src={MaasaiMara3} alt="Maasai Mara 3" />
        <img src={MaasaiMara4} alt="Maasai Mara 4" />
        <img src={MaasaiMara5} alt="Maasai Mara 5" />
        
        <img src={MaasaiMaraGallery2} alt="Maasai Mara Gallery 2" />
        <img src={MaasaiMaraGallery3} alt="Maasai Mara Gallery 3" />
        <img src={MaasaiMaraGallery4} alt="Maasai Mara Gallery 4" />
        <img src={MaasaiMaraGallery5} alt="Maasai Mara Gallery 5" />
        <img src={MaasaiMaraGallery6} alt="Maasai Mara Gallery 6" />
      </div>
    </div>
  );
};

export default MaasaiMara;