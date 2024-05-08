import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobItem from './JobItem';


const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/jobs')
      .then(response => {
        setJobs(response.data);
        console.log("Uzee");
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  return (
    <div className="job-list">
      {/* <h2>Job Listings</h2> */}
      <ul className='container'>
        {jobs.map(job => (
          <JobItem key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
}

export default JobList;
