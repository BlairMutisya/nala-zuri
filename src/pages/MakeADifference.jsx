import React, { useState, useEffect } from "react";
import "./MakeADifference.css";
import plantingImage from "../assets/Planting.jpg";
import mukuru from "../assets/mukuru.jpg"
import Footer from "../components/Footer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import db from "../firebase.js";
import { FaCheckCircle } from "react-icons/fa";

const MakeADifference = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const totalGoal = 10000;
  const treesPlanted = 1245;
  const progress = (treesPlanted / totalGoal) * 100;

  // Real-time listener for confirmed donations
  const fetchConfirmedDonations = (callback) => {
    const q = query(
      collection(db, "donationIntents"),
      where("status", "==", "confirmed")
    );

    // Real-time listener
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let total = 0;
      snapshot.forEach((doc) => {
        total += doc.data().amount;
      });
      callback(total);
    });

    return unsubscribe; // This will allow you to unsubscribe from the listener when needed
  };

  useEffect(() => {
    const updateConfirmedDonations = (total) => {
      setDonationAmount(total);
    };

    const unsubscribe = fetchConfirmedDonations(updateConfirmedDonations);

    // Cleanup listener when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleDonation = async () => {
    const amount = parseFloat(prompt("Enter donation amount:"));
    if (!isNaN(amount) && amount > 0) {
      try {
        // Log intent to Firestore
        await addDoc(collection(db, "donationIntents"), {
          amount,
          timestamp: Timestamp.now(),
          status: "pending", // manually verify later
        });

        // Open PayPal donation link
        window.open(
          `https://www.paypal.com/donate?hosted_button_id=GVA9JT5KNJ3QY`,
          "_blank"
        );
      } catch (error) {
        console.error("Error logging donation intent:", error);
        alert("Failed to log donation intent.");
      }
    } else {
      alert("Please enter a valid donation amount.");
    }
  };

  return (
    <div className="make-a-difference">
      <div className="hero-section-difference">
        <div className="hero-overlay-difference">
          <h1>MAKE A DIFFERENCE</h1>
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
        </div>
        <div className="image-content">
          <img src={plantingImage} alt="Tree Planting Initiative" />;
        </div>
      </div>
      {/* Current Projects Section */}
      <section className="make-difference-hero">
        <div className="make-difference-project">
          <h2 className="make-difference-subtitle">
            Our Current Project: 5 Waves at Mukuru Primary & Junior High School
          </h2>
          <div className="make-difference-columns">
            <div>
              <p className="make-difference-paragraph">
                We are proud to support a <strong>five-year initiative</strong>{" "}
                at
                <strong>Mukuru Primary and Junior High School</strong>, in
                partnership with{" "}
                <a
                  href="https://planetpluskenya.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Planet Plus Kenya-</strong>
                </a>{" "}
                —an environmental organization dedicated to conservation and
                climate resilience.
              </p>
              <p className="make-difference-paragraph">
                This project, <strong>5 Waves</strong>, focuses on empowering{" "}
                <strong>100 students</strong>
                through <strong>Education for Sustainable Development</strong>,
                equipping them with knowledge and skills to address
                environmental and socio-economic challenges in their community
                by{" "}
                <strong>contributing at least USD 10,000 over 5 years</strong>.
              </p>
            </div>
            <div className="make-difference-image-box">
              <img src={mukuru} alt="Students at Mukuru School" />
            </div>
          </div>

          <div className="make-difference-highlight">
            <h3 className="make-difference-highlight-title">
              Why Mukuru Primary & Junior High School?
            </h3>
            <p className="make-difference-paragraph">
              Located in <strong>Mukuru Kayaba</strong>, one of Nairobi's
              largest informal settlements, Mukuru Primary serves as a beacon of
              hope for many children. Established <strong>40 years ago</strong>{" "}
              by the <strong>Sisters of Mercy</strong>, the school remains a
              vital access point for education in an area facing{" "}
              <strong>severe socio-economic challenges</strong>, including:
            </p>

            <ul className="make-difference-list">
              <li>
                <FaCheckCircle className="icon" /> Overcrowding & inadequate
                sanitation
              </li>
              <li>
                <FaCheckCircle className="icon" /> Limited access to clean water
                & healthcare
              </li>
              <li>
                <FaCheckCircle className="icon" /> High rates of unemployment &
                informal labor
              </li>
              <li>
                <FaCheckCircle className="icon" /> Lack of environmental
                awareness & civic education
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="donation-section">
        <h2 className="donation-title">
          Be Part of the Change – Support the 5 Waves Project
        </h2>
        <div className="donation-description">
          <p>
            At Nalazuri Travels, we believe in giving back. Our goal is to
            contribute at least $10,000 over five years to provide students with
            the resources and education they need to build a sustainable future.
          </p>
        </div>
        <div className="donation-grid">
          <div className="donation-card">
            <h3 className="donation-card-title">Support the Project</h3>
            <p>
              Your contributions help provide essential resources such as
              computers, mobile phones, cameras, and GIS applications to enhance
              students' learning and engagement.
            </p>
          </div>
          <div className="donation-card">
            <h3 className="donation-card-title">
              Sponsor a Student or Volunteer
            </h3>
            <p>
              Expand our reach by funding student participation, volunteer
              facilitation, and community-led initiatives. If you'd like to
              contribute directly, we can connect you with our partners at{" "}
              <a
                href="https://planetpluskenya.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="donation-link"
              >
                Planet Plus Kenya
              </a>
              , who work year-round to make a difference.
            </p>
          </div>
        </div>
      </section>

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
      <Footer />
    </div>
  );
};

export default MakeADifference;
