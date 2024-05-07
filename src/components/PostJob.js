import React from 'react';
import NavBar from "./NavBar";
import JobForm from './JobForm';

const FindTalent = () => {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <div className="find-talent">
            <h2>Find Talent</h2>
            <p>Explore profiles of talented individuals.</p>
        </div>
        <JobForm />
        </>
    );
}

export default FindTalent;
