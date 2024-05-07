import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/jobs', formData)
      .then(response => {
        console.log('Job posted successfully:', response.data);
        // Reset form fields
        setFormData({
          title: '',
          description: '',
          location: ''
        });
      })
      .catch(error => {
        console.error('Error posting job:', error);
      });
  };

  return (
    <div className="job-form">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JobForm;
