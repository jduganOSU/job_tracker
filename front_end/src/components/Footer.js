import React from 'react';
import './css/Footer.scss'; // Import your footer styles

function Footer() {
  return (
    <footer className="footer">
      <div className="left-section">
        <h3>Career Pilot</h3>
        <p>Enhance your employment trajectory with our sophisticated application tracking system—engineered for meticulous engagement and strategic career progression.</p>
        <button className="get-started-button">Get Started</button>
      </div>
      <div className="middle-section">
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Guide</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="right-section">
        <p>Follow us</p>
        <div className="social-icons">


        </div>
      </div>
      {/* <div className="copyright">
        <p>&copy; 2024 John Dugan, Andew Haylett and Luis Flores. All rights reserved.</p>
      </div> */}
    </footer>
  );
}

export default Footer;
