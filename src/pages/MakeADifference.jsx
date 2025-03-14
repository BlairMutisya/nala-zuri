import React, { useState } from "react";
import "./MakeADifference.css";
// import Footer from "../components/Footer";
import plantingImage from "../assets/planting.jpg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MakeADifference = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const totalGoal = 10000; 
  const treesPlanted = 1245;
  const progress = (treesPlanted / totalGoal) * 100;
  
  const handleDonation = () => {
    const amount = parseFloat(prompt("Enter donation amount:"));
    if (!isNaN(amount) && amount > 0) {
      setDonationAmount((prevAmount) => prevAmount + amount);
      window.open(
        `https://www.paypal.com/donate?business=YOUR_PAYPAL_EMAIL&amount=${amount}`,
        "_blank"
      );
    } else {
      alert("Please enter a valid donation amount.");
    }
  };
 
  return (
    <div className="make-a-difference">
      <div className="hero-section-difference">
        <div className="hero-overlay-difference">
          <h1>Make a Difference</h1>
          <p>
            Travel with purpose! At <strong>Nala Zuri Travels</strong> – Make a
            Difference, we believe that every journey should leave a positive
            impact.
          </p>
        </div>
      </div>

      <div className="content-difference">
        <h2>How We Make a Difference</h2>
        <div className="difference-cards">
          <div className="difference-card">
            <div className="icon">1</div>
            <h3>Travel with Purpose</h3>
            <p>
              Every journey you take with us directly contributes to local
              community development. We partner with sustainable initiatives to
              ensure that your travel experience creates positive change in the
              destinations you visit.
            </p>
          </div>

          <div className="difference-card">
            <div className="icon">2</div>
            <h3>Give More, Create More Impact</h3>
            <p>
              Through our innovative giving program, you can choose to support
              specific community projects. From education initiatives to
              wildlife conservation, your contribution makes a real difference.
            </p>
          </div>
        </div>
      </div>

      <div className="travel-green-section">
        <div className="text-content">
          <h2>Travel Green, Plant a Tree</h2>
          <h3>Adopt a Tree, Restore a Forest</h3>
          <p>
            At Nalazuri Travels, we believe that travel should not only be an
            adventure but also a force for good. That's why we launched Travel
            Green, Plant a Tree—an initiative dedicated to combating climate
            change, restoring Kenya’s forests, and preserving biodiversity.
          </p>
          <button className="learn-more-btn">Learn About Our Impact</button>
        </div>
        <div className="image-content">
          <img src={plantingImage} alt="Tree Planting Initiative" />;
        </div>
      </div>
      <div className="goal-commitment-section">
        <div className="goal-card">
          <h3>Our Goal</h3>
          <div className="progress-container">
            <CircularProgressbar
              value={progress}
              styles={buildStyles({
                pathColor: "#2BA84A",
                trailColor: "#DDE6ED",
                strokeLinecap: "round",
                textSize: "16px",
              })}
            />
          </div>
          <p className="goal-count">{treesPlanted.toLocaleString()}</p>
          <p>
            Trees planted towards our annual goal of{" "}
            {totalGoal.toLocaleString()}
          </p>
        </div>

        <div className="commitment-card">
          <h3>Our Commitment</h3>
          <p>
            As part of our dedication to sustainability, Nalazuri Travels
            commits <strong>5% of profits</strong> directly to this mission.
            Every trip you book with us helps fund:
          </p>
          <ul className="commitment-list">
            <li>🌱 Tree planting initiatives</li>
            <li>🌳 Forest restoration projects</li>
            <li>👥 Community-led conservation efforts</li>
          </ul>
        </div>
      </div>
      {/* Donation Section */}
      <div className="donation-section">
        <h2>Support Our Mission</h2>
        <p>
          Your donation helps us plant more trees and create a sustainable
          future. Join us in making a difference!
        </p>

        <div className="donation-card">
          <p className="donation-label">Current Donations</p>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(donationAmount / totalGoal) * 100}%` }}
            ></div>
          </div>
          <p className="donation-amount">
            ${donationAmount.toLocaleString()} of ${totalGoal.toLocaleString()}{" "}
            Goal
          </p>

          <button className="paypal-btn" onClick={handleDonation}>
            <img
              src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_200x51.png"
              alt="PayPal Logo"
              className="paypal-logo"
            />
            Donate with PayPal
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeADifference;
