import React from 'react';
import NavBar from "./NavBar";
import JobList from './JobList';

function JobListings() {
  return (
    <>
        <header>
            <NavBar />
        </header>
        <div className="find-work">
        <h2>Find Work</h2>
        <p>Discover job opportunities that match your skills.</p>
        </div>
        <JobList />
    </>
  );
}

export default JobListings;
