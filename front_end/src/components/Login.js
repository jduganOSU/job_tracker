import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';

function Login({ onCreateAccount }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for login logic - need to implement this
    // Once the user successfully logs in, navigate to the Create Job page
    // For demonstration purposes, let's navigate to "/create-job" immediately
    navigate('/user-home');
  };

  return (
    
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
          <button type="submit" onClick={handleSubmit} className="login-button">Login</button>
        </form>
        <p className="signup-text">
        <button className="signup-link" onClick={onCreateAccount}>
          Need an Account? Click here to sign up
        </button>
      </p>
        <p className="contact-text">Contact Us</p>
      </div>
  );
}

export default Login;