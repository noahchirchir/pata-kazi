import React from 'react';
import NavBar from "./NavBar";
const Home = () => {

  return (
    <>
        <header>
        <NavBar />
        </header>
        <div className="home">
        <h2>Welcome to our Job Listing App!</h2>
        <p>Find talented individuals or discover job opportunities.</p>
        </div>
    </>
    
  );
}

export default Home;
