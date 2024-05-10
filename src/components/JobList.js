import React from 'react';
import JobItem from './JobItem';

function JobList({filteredJobs}){
  return (
    <div className="job-list">
      <ul className='container'>
        {filteredJobs.map(job => (
          <JobItem key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
}

export default JobList;
