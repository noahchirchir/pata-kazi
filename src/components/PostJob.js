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
            <p>Enlist a job opportunity for qualifying individuals</p>
        </div>
        <JobForm />
        </>
    );
}

export default FindTalent;
