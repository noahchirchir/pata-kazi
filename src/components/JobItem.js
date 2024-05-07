import React from 'react';

const JobItem = ({ job }) => {
  return (
    <li className="job-detail">
      <h2>{job.title}</h2>
      <p>Description: {job.description}</p>
      <p>Location: {job.location}</p>
      {/* Add more details as needed */}
    </li>
  );
}

export default JobItem;
