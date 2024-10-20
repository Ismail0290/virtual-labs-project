// src/FeedbackForm.js
import React, { useState } from 'react';
import './FeedbackForm.css'; // Create a CSS file for styling

const FeedbackForm = ({ topic }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comments: ''
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
    // Handle form submission, e.g., send data to a server or display an alert
    alert(`Feedback submitted for ${topic}: ${JSON.stringify(formData, null, 2)}`);
    setFormData({
      name: '',
      email: '',
      rating: '',
      comments: ''
    });
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h3>Feedback for {topic}</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Rating:</label>
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        >
          <option value="">Select a rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
      </div>
      <div>
        <label>Comments:</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
