import React from "react";
import "./LandingPage.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Giraffe from "../assets/Girrafe.jpg"
import Elephant from "../assets/Elephant.jpeg"
import Leopard from "../assets/Leopard.jpeg"
import Visit from "../assets/Visit.jpeg"
import Antelope from "../assets/Antelope.jpg"
import GroupPhoto from '../assets/Group.jpg';
import Lion from '../assets/Lion.jpeg';
import Zebra from "../assets/Meru (2).JPG"
import Cheeetah from "../assets/Cheeetah.JPG"
import Gazelle from "../assets/Gazelle.jpeg"

import Footer from "../components/Footer";


const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section with Background Image */}
      <div className="hero-section-landingpage">
        <div className="overlay"></div>
        <div className="content">
          <h2>EXPLORE THE BEAUTY OF</h2>
          <h1>KENYA</h1>
          <h2>WITH NALAZURI TRAVELS</h2>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/nalazuritravels/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/+254797106436" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* New Section */}
      <section className="journey-section">
        <div className="journey-text">
          <h2>
            A JOURNEY  FROM UNTAMED WILDERNESS TO COASTAL SERENITY
          </h2>
          <div className="underline"></div>
        </div>
        <div className="journey-content">
          <p>
            Experience Kenya in unparalleled style, filled with curated
            discoveries. Begin your journey with an intimate{" "}
            <strong>Safaris</strong>, immersing yourself in the raw beauty of
            the Maasai Mara or the serene landscapes of Amboseli, where
            elephants roam beneath the shadow of Mount Kilimanjaro. Retreat to
            exclusive lodges and tented camps, where personalized service and
            breathtaking vistas create an atmosphere of refined tranquility.
          </p>
          <p>
            From the wild heart of Africa, transition to the{" "}
            <strong>Swahili Coast</strong>, where the rhythm of the ocean meets
            centuries of rich heritage. Indulge in the pristine beauty of Diani,
            the cultural charm of Lamu, or the secluded elegance of Watamu and
            Kilifi. Savor exquisite cuisine, unwind in sophisticated coastal
            retreats, and immerse yourself in the warm hospitality of Kenya’s
            timeless shores.
          </p>
        </div>
      </section>
      {/* Full-Width Image Section */}
      <div className="full-width-image"></div>
      <div className="nalazuri-travels-section">
        <div className="nalazuri-left">
          <h2>
            NALAZURI <br /> TRAVELS
          </h2>
          <div className="vertical-line"></div>
        </div>
        <div className="nalazuri-right">
          <p>
            At <strong>Nalazuri Travels</strong>, we don’t just craft unforgettable travel experiences—we ensure they make a meaningful difference.
            Our dedication to <strong>sustainability</strong> is reflected in our support of two core initiatives:
            <strong> Travel Green, Plant a Tree</strong>, focused on <strong>environmental conservation</strong> through <strong>tree planting</strong>,
            and <strong>Travel for Change</strong>, which <strong>empowers local communities</strong> through impactful <strong>development projects</strong>.
          </p>

        </div>
      </div>
         <section className="featured-section">
      <div className="featured-container">
        <div className="featured-header">
          <h2 className="featured-title">GALLERY</h2>
          {/*<p className="featured-subtitle">*/}
          {/*  Discover our carefully curated selection of extraordinary adventures*/}
          {/*</p>*/}
          <div className="featured-underline"></div>
        </div>

        <div className="featured-grid">
          {[
            {
              img: Visit,
            },

            {
              img: Giraffe,
            },
            {
              img: GroupPhoto,
            },
            {
              img: Antelope,

            },
            {
              img: Elephant,
            },
            {
              img: Leopard,
            },
            {
              img: Lion,
            },
            {
              img: Zebra,
            },
            {
              img: Cheeetah
            },
            {
              img: Gazelle
            }
          ].map((item, index) => (
            <div className="featured-card" key={index}>
              <div className="featured-overlay"></div>
              <img
                src={item.img}
                alt={item.title}
                className="featured-image"
              />
              <div className="featured-content">
                <h3 className="featured-card-title">{item.title}</h3>
                <p className="featured-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
};

export default LandingPage;