import React from 'react';
import NavBar from "./NavBar";
import JobForm from './JobForm';

const FindTalent = () => {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <main className="talent-page-container">
            <h2>Find Talent</h2>
            <p>Explore profiles of talented individuals.</p>
        </main>
        <JobForm />
        </>
    );
}

export default FindTalent;
