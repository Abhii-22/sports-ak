import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-header">
        <h1>Welcome to Sports Club</h1>
        <p>Your ultimate destination for sports events and community.</p>
      </div>
      <div className="landing-cta">
        <Link to="/signup" className="cta-button primary">Get Started</Link>
        <Link to="/signin" className="cta-button secondary">Sign In</Link>
      </div>
    </div>
  );
};

export default LandingPage;
