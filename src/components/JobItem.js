// import React from 'react';

// const JobItem = ({ job }) => {
//   return (
//     <li className="job-detail">
//       <h2>{job.title}</h2>
//       <p>Description: {job.description}</p>
//       <p>Location: {job.location}</p>
//       {/* Add more details as needed */}
//     </li>
//   );
// }

// export default JobItem;


import React from 'react';
//import './styles.css'; // Import your CSS file

const JobItem = ({ job }) => {
    const { title, description, company, location, date_posted } = job;

    return (
        <div className="card">
            <h3>{title}</h3>
            <p className="company">{company}</p>
            <p className="location">{location}</p>
            <p>{description}</p>
            <p className="posted">Posted on: {date_posted}</p>
        </div>
    );
};

export default JobItem;
