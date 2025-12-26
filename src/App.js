import React, { useState } from 'react';
import './App.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    iqama: '',
    cardNo: '',
    course: '',
    issuedDate: '',
    expiryDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Registration Successful!');
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Registration</h2>
          <p>Enter your details to enroll in the course</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="input-grid">
            
            {/* Name */}
            <div className="input-box">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Course */}
            <div className="input-box">
              <label>Course Name</label>
              <input
                type="text"
                name="course"
                placeholder="Course Name"
                value={formData.course}
                onChange={handleChange}
                required
              />
            </div>

            {/* Iqama */}
            <div className="input-box">
              <label>Iqama / ID Number</label>
              <input
                type="text"
                name="iqama"
                placeholder="Iqama Number"
                value={formData.iqama}
                onChange={handleChange}
                required
              />
            </div>

            {/* Card No */}
            <div className="input-box">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNo"
                placeholder="Card Number"
                value={formData.cardNo}
                onChange={handleChange}
                required
              />
            </div>

            {/* Issued Date */}
            <div className="input-box">
              <label>Issued Date</label>
              <input
                type="date"
                name="issuedDate"
                value={formData.issuedDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* Expiry Date */}
            <div className="input-box">
              <label>Expiry Date</label>
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <button type="submit" className="submit-btn">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;