import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobItem from './JobItem';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('https://job-lists.onrender.com/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://job-lists.onrender.com/jobs/${id}`)
      .then(response => {
        setJobs(prevJobs => prevJobs.filter(job => job.id !== id));
        console.log('Job deleted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error deleting job:', error);
      });
  };

  const handleEdit = (editedJob) => {
    axios.put(`https://job-lists.onrender.com/jobs/${editedJob.id}`, editedJob)
      .then(response => {
        setJobs(prevJobs => prevJobs.map(job => {
          if (job.id === editedJob.id) {
            return editedJob;
          }
          return job;
        }));
        console.log('Job updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating job:', error);
      });
  };

  return (
    <div className="job-list">
      <ul className='container'>
        {jobs.map(job => (
          <JobItem key={job.id} job={job} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </ul>
    </div>
  );
}

export default JobList;

