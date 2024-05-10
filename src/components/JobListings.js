import NavBar from "./NavBar";
import JobList from './JobList';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function JobListings() {

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({ industry: '', location: '' });

  useEffect(() => {
    axios.get('https://job-lists.onrender.com/jobs')
      .then(response => {
        setJobs(response.data);
        setFilteredJobs(response.data); // Initialize filtered jobs with all jobs
        console.log('Jobs fetched successfully');
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  useEffect(() => {
    // Apply filters when filter criteria changes
    const filtered = jobs.filter(job => {
      const industryMatch = !filterCriteria.industry || job.industry.toLowerCase() === filterCriteria.industry.toLowerCase();
      const locationMatch = !filterCriteria.location || job.location.toLowerCase() === filterCriteria.location.toLowerCase();
      return industryMatch && locationMatch;
    });
    setFilteredJobs(filtered);
  }, [jobs, filterCriteria]);

  const handleIndustryChange = (e) => {
    setFilterCriteria({ ...filterCriteria, industry: e.target.value });
  };

  const handleLocationChange = (e) => {
    setFilterCriteria({ ...filterCriteria, location: e.target.value });
  };
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="find-work">
        <div className="left">
        <h2>Find Work</h2>
        <p>Discover job opportunities that match your skills.</p>
        </div>
        <div className="right">
          <div className="filter-options">
            Filter Jobs
            <select value={filterCriteria.industry} onChange={handleIndustryChange}>
              <option value="">All Industries</option>
              {/* Assume jobs contain all possible industries */}
              {[...new Set(jobs.map(job => job.industry))].map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
            <select value={filterCriteria.location} onChange={handleLocationChange}>
              <option value="">All Locations</option>
              {/* Assume jobs contain all possible locations */}
              {[...new Set(jobs.map(job => job.location))].map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <JobList filteredJobs={filteredJobs} />
    </>
  );
}

export default JobListings;
