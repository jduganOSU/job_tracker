import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/userService';
import './css/Login.css';

function Login({ onCreateAccount }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginUser(email, password);
      // Call onLoginSuccess to update App state or redirect user
      navigate('/user-home');
    } catch (error) {
      window.alert("Username/Emails or password error");
    }
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