import React, { useState } from 'react';
import './Inquiries.css';

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
    referralSource: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submission logic here (e.g., API call)
  };

  return (
    <div className="inquiry-form">
      <h2>Tell Us A Little <span>About You</span></h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Inquiry;