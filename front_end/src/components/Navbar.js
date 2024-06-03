import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Navbar.css'; // assuming your styles are in Navbar.css

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <div className="logo">Career Pilot</div>
      </div>
      <div className="middle-section">
        <a href="">About</a>
        <a href="#features">Features</a>
        <a href="#faq">FAQs</a>
      </div>
      <div className="right-section">
        <button className="login-button-nav" onClick={handleLoginButtonClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
