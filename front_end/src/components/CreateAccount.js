import React, { useState } from 'react';
import './css/CreateAccount.css'; // Ensure this CSS file exists with the correct styles

function CreateAccount({ onBackToLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Need to add create account logic
  };

  return (
      <div className="form-box">
        <h1 className="header-text">Create Account</h1>
        <form onSubmit={handleSubmit} className="account-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input"
          />
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
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
        <p className="login-text">
        <button className="login-link" onClick={onBackToLogin}>Back to Login</button>
        </p>
        <p className="contact-text">Contact Us</p>
      </div>
  );
}

export default CreateAccount;