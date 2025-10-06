import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
        <p className="signin-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
