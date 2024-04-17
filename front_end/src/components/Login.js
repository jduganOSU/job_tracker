import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Need to add login logic
  };

  return (
    
    <div className="login-container">
      <div className="form-box">
        <h2 className="welcome-text">Welcome!</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
          <Link to="/create-account" className="signup-link">
            Need an Account? Click here to sign up
          </Link>
        </p>
        <p className="contact-text">Contact Us</p>
      </div>
    </div>
  );
}

export default Login;