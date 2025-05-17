import React, { useState } from 'react';
import './Inquiries.css';
import Footer from "../components/Footer";

import CoverPhoto from '../assets/Inquiry Cover Photo.jpeg';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firstTimeAfrica: '',
    firstTimeKenya: '',
    travelDate: '',
    travelDuration: '',
    referralSource: '',
    dreamList: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
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
        <h2>Ready for the Journey of a Lifetime?</h2>
        <p>
          Imagine waking up to the sound of lions in the distance, sipping sundowners as elephants roam nearby,
          and watching the African sky burst into color at sunset. Whether it’s your first safari or your fifth,
          your adventure begins here. Let us craft a bespoke experience just for you.
        </p>
      </div>

      <h2>Tell Us A Little <span>About You</span></h2>
      <form onSubmit={handleSubmit} className="inquiry-form">
        <div className="form-row">
          <input type="text" name="firstName" placeholder="First Name *" required onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name *" required onChange={handleChange} />
        </div>
        <div className="form-row">
          <input type="email" name="email" placeholder="Email *" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Mobile Number (+1) *" required onChange={handleChange} />
        </div>
        <div className="form-row">
          <select name="firstTimeAfrica" onChange={handleChange} required>
            <option value="">Is this your first trip to Africa?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <select name="firstTimeKenya" onChange={handleChange} required>
            <option value="">Is this your first trip to Kenya?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-row">
          <input type="text" name="travelDate" placeholder="When would you like to travel?" onChange={handleChange} />
          <input type="text" name="travelDuration" placeholder="How long would you like to travel?" onChange={handleChange} />
        </div>
        <div className="form-row">
          <input type="text" name="referralSource" placeholder="How did you hear about us?" onChange={handleChange} />
        </div>

        <div className="dream-list-section">
          <h2>Send Us Your <span>Dream List</span></h2>
          <p>Let us know what you'd love to see, do, and experience — we'll make it happen.</p>
          <textarea
            name="dreamList"
            placeholder="Tell us about the wildlife, parks, activities, or experiences you'd love to include..."
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="inquiry-outro">
        <p>
          Our team of safari experts is eager to help bring your dream adventure to life. Once we receive your details,
          we’ll be in touch to start designing your unforgettable escape into the wild. Let’s make magic happen under
          the African skies.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Inquiry;