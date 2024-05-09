import React, { useState } from 'react';
import axios from 'axios';


function JobForm(){
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        company: '',
        location: '',
        date_posted: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('https://job-lists.onrender.com/jobs', formData)
        .then(response => {
          console.log('Job posted successfully:', response.data);
          // Reset form fields
          setFormData({
            title: '',
            description: '',
            company: '',
            location: '',
            date_posted: ''
        });
        })
        .catch(error => {
          console.error('Error posting job:', error);
          setError('Failed to add job. Please try again.');
        });
    };
  

    return (
        <form onSubmit={handleSubmit} className="job-form">
            <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </label>
            <label>
                Description:
                <textarea name="description" value={formData.description} onChange={handleChange} required />
            </label>
            <label>
                Company:
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />
            </label>
            <label>
                Location:
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
            </label>
            <label>
                Date Posted:
                <input type="date" name="date_posted" value={formData.date_posted} onChange={handleChange} required />
            </label>
            <button type="submit">Add Job</button>
        </form>
    );
};

export default JobForm;
