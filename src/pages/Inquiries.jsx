import React, { useState } from 'react';
import './Inquiries.css';
import Footer from "../components/Footer";
import CoverPhoto from '../assets/Inquiry Cover Photo.jpeg';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    contactMethod: '',
    otherContactMethod: '',
    fromDate: '',
    toDate: '',
    flexibleDates: '',
    tripDuration: '',
    destinations: [],
    experiences: [],
    customExperience: '',
    accommodation: '',
    travelers: '',
    hasChildren: '',
    childrenAges: '',
    values: {
      localSupport: 3,
      ecoTravel: 3,
      culture: 3,
      comfort: 3
    },
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'destinations') {
      setFormData(prev => ({
        ...prev,
        destinations: checked
          ? [...prev.destinations, value]
          : prev.destinations.filter(d => d !== value)
      }));
    } else if (type === 'checkbox' && name === 'experiences') {
      setFormData(prev => ({
        ...prev,
        experiences: checked
          ? [...prev.experiences, value]
          : prev.experiences.filter(d => d !== value)
      }));
    } else if (name.startsWith('values.')) {
      const key = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        values: {
          ...prev.values,
          [key]: parseInt(value)
        }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

 
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok) {
      alert("✅ Inquiry sent successfully!");
      // Optional: reset form here if needed
    } else {
      alert("❌ Failed to send: " + result.error);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("❌ Could not connect to server.");
  }
};

  return (
    <div className="inquiry-page">
      <div className="hero-section-inquiry" style={{ backgroundImage: `url(${CoverPhoto})` }}>
        <div className="hero-overlay-inquiry">
          <h1>Your African Safari Awaits</h1>
          <p>Let us tailor an unforgettable experience through Kenya's wild beauty.</p>
        </div>
      </div>

      <div className="inquiry-intro">
        <h2>Ready to Start Planning Your Safari Adventure?</h2>
        <p>
          We’d love to help you design a unique and meaningful travel experience through Kenya’s breathtaking landscapes—from the iconic Maasai Mara to the serene shores of Lamu.
          Whether you're dreaming of a luxury lodge safari, a beach escape, or a cultural immersion, we're here to tailor every detail just for you.
        </p>
        <p>
          Please take a moment to fill in our Safari Inquiry Questionnaire so we can create a personalized itinerary that matches your style, budget, and values.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="inquiry-form">

        <h3>🧍 Personal Information</h3>
        <input type="text" name="fullName" placeholder="Full Name *" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address *" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number (Optional)" onChange={handleChange} />
        <input type="text" name="country" placeholder="Country of Residence" onChange={handleChange} />

        <label>Preferred Method of Contact</label>
        <select name="contactMethod" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Other">Other (please specify)</option>
        </select>
        {formData.contactMethod === 'Other' && (
          <input type="text" name="otherContactMethod" placeholder="Please specify" onChange={handleChange} />
        )}

        <h3>📅 Travel Preferences</h3>
        <label>Preferred Travel Dates</label>
        <div className="form-row">
          <input type="date" name="fromDate" onChange={handleChange} />
          <input type="date" name="toDate" onChange={handleChange} />
        </div>
        <label>Are your dates flexible?</label>
        <select name="flexibleDates" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label>Trip Duration</label>
        <select name="tripDuration" onChange={handleChange}>
          <option value="">Select Duration</option>
          <option value="3–5">3–5</option>
          <option value="6–8">6–8</option>
          <option value="9–12">9–12</option>
          <option value="13+">13+</option>
        </select>

        <h3>🗺️ Destination & Experience</h3>
        <label>Destinations in Kenya</label>
        {["Maasai Mara", "Tsavo East", "Tsavo West", "Lake Nakuru National Park", "Nairobi National Park", "Amboseli National Park", "Samburu National Reserve", "Meru National Park", "Kilifi", "Diani Beach", "Lamu", "Not sure yet"].map(dest => (
          <div key={dest}>
            <input type="checkbox" name="destinations" value={dest} onChange={handleChange} />
            <label>{dest}</label>
          </div>
        ))}

        <label>Experiences</label>
        {["Big Five Game Safari", "Luxury Lodge Safari", "Cultural & Community Tours", "Beach + Safari Combo", "Sustainable/Eco-friendly Safari", "Romantic Getaway or Honeymoon", "Family Safari", "Solo Adventure"].map(exp => (
          <div key={exp}>
            <input type="checkbox" name="experiences" value={exp} onChange={handleChange} />
            <label>{exp}</label>
          </div>
        ))}
        <input type="text" name="customExperience" placeholder="Custom experience (optional)" onChange={handleChange} />

        <h3>🛏️ Accommodation Preferences</h3>
        <select name="accommodation" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Budget Lodges">Budget Lodges</option>
          <option value="Mid-range Lodges/Hotels">Mid-range Lodges/Hotels</option>
          <option value="Luxury Lodges/Hotels">Luxury Lodges/Hotels</option>
          <option value="Boutique Coastal Villas">Boutique Coastal Villas</option>
          <option value="Mix">I’d like a mix</option>
          <option value="Not sure">Not sure</option>
        </select>

        <h3>👨‍👩‍👧‍👦 Group Details</h3>
        <input type="number" name="travelers" placeholder="How many people are traveling?" onChange={handleChange} />
        <label>Are there children in your group?</label>
        <select name="hasChildren" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {formData.hasChildren === 'Yes' && (
          <input type="text" name="childrenAges" placeholder="Please specify ages" onChange={handleChange} />
        )}

        <h3>🌱 Travel Values (Rate 1–5)</h3>
        {[
          { name: 'localSupport', label: 'Supporting local communities' },
          { name: 'ecoTravel', label: 'Sustainable and eco-friendly travel' },
          { name: 'culture', label: 'Cultural immersion and learning' },
          { name: 'comfort', label: 'Comfort and relaxation' }
        ].map(({ name, label }) => (
          <div key={name}>
            <label>{label}</label>
            <select name={`values.${name}`} onChange={handleChange}>
              {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
        ))}

        <h3>💬 Additional Notes</h3>
        <textarea
          name="notes"
          placeholder="Any animals you’d love to see, activities, special occasions, dietary needs, or anything else?"
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Inquiry</button>
      </form>

      <div className="inquiry-outro">
        <p>
          Our team of safari experts is eager to bring your dream adventure to life. Once we receive your details,
          we’ll get back to you with a personalized proposal. Let’s plan something unforgettable—the Nalazuri way.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Inquiry;
