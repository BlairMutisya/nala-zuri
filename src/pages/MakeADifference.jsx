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
      {/* Current Projects Section */}
      <section className="make-difference-hero">
        {/* <div className="make-difference-grid">
          <div className="make-difference-content">
            <h1 className="make-difference-title">
              Sustainable Travel for a Better Tomorrow
            </h1>
            <p className="make-difference-text">
              Join us in our mission to promote eco-friendly travel experiences
              while supporting local communities and environmental conservation
              projects.
            </p>
            <div className="make-difference-buttons">
              <button className="make-difference-btn-primary">
                Explore Our Projects
              </button>
              <button className="make-difference-btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          <div className="make-difference-image">
            <img
              src="https://readdy.ai/api/search-image?query=Beautiful%20landscape%20with%20lush%20green%20forests%20and%20mountains%2C%20eco-friendly%20travel%20concept%2C%20sustainable%20tourism%2C%20environmental%20conservation%2C%20natural%20scenery%20with%20clean%20water%20and%20clear%20blue%20sky%2C%20peaceful%20nature%20scene&width=700&height=500&seq=1&orientation=landscape"
              alt="Sustainable Travel"
            />
          </div>
        </div> */}

        <div className="make-difference-project">
          <h2 className="make-difference-subtitle">
            Our Current Project: 5 Waves at Mukuru Primary & Junior High School
          </h2>
          <div className="make-difference-columns">
            <div>
              <p className="make-difference-paragraph">
                We are proud to support a five-year initiative at Mukuru Primary
                and Junior High School, in partnership with{" "}
                <a
                  href="https://planetpluskenya.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Planet Plus Kenya
                </a>{" "}
                —an environmental organization dedicated to conservation and
                climate resilience.
              </p>
              <p className="make-difference-paragraph">
                Through 5 Waves, we aim to instill environmental consciousness,
                mental health awareness, and civic engagement among students and
                the wider community.
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
              Located in Mukuru Kayaba, one of Nairobi's largest informal
              settlements, Mukuru Primary serves as a beacon of hope for many
              children. Established 40 years ago by the Sisters of Mercy, the
              school remains a vital access point for education in an area
              facing severe socio-economic challenges.
            </p>
          </div>

          {/* <div className="make-difference-note">
            <h3 className="make-difference-note-title">
              Another Project: Forest Restoration in Limuru/Kimende
            </h3>
            <div className="make-difference-columns">
              <div>
                <p className="make-difference-paragraph">
                  We are currently exploring a forest restoration project in
                  Limuru/Kimende, just 150 km from Nairobi. A site visit is
                  planned soon.
                </p>
              </div>
              <div
                className="make-difference-image-box"
                style={{ height: "12rem" }}
              >
                <img
                  src="https://readdy.ai/api/search-image?query=Beautiful%20forest%20landscape%20in%20Kenya%20with%20lush%20green%20trees%20and%20natural%20vegetation%2C%20morning%20sunlight%20filtering%20through%20leaves%2C%20peaceful%20nature%20conservation%20area&width=600&height=300&seq=3&orientation=landscape"
                  alt="Limuru Forest"
                />
              </div>
            </div> */}
          {/* </div> */}
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
