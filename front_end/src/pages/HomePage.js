import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FAQDropdown from '../components/FAQDropdown';
import Footer from '../components/Footer';
import Typed from 'typed.js'; // Import Typed.js library
import './css/HomePage.scss'; // Import Sass file
import undrawStatsSVG from '../assets/undraw_stats.svg';

function HomePage() {
  const navigate = useNavigate(); // Get the navigation function
  const el = useRef(null);

  // Function to handle login button click event
  const handleLoginButtonClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Apply.', 'Track.', 'Conquer.'],
      typeSpeed: 120,
      backSpeed: 120,
      loop: true,
      backDelay: 2000,
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <div className="main-section">
        <div className="main-content">
          <h1>Your job journey simplified</h1>
          <div className="typing-animation">
            <span ref={el} className="typed-text"></span>
          </div>
          <p className="with-career-pilot">with Career Pilot.</p>
          <p className="subtext">Empower your job search —track applications, follow-ups, and offers in one seamless dashboard.</p>
          <button className="login-button-medium" onClick={handleLoginButtonClick}>
            Sign Up
          </button>
        </div>
        <div className="image-section">
          <img src={undrawStatsSVG} alt="Undraw Stats" />
        </div>
      </div>
      <div className="new-section-track">
        <div className="new-content">
          <h2 className="sub-header">Track</h2>
          <p className="subtext" style={{ color: '#3BAD4C' }}>Streamline your job hunt</p>
          <p className="subtext">with real-time tracking of every application’s progress.</p>
        </div>
        <div className="new-image">
          {/* Add your image here */}
        </div>
      </div>
      <div className="new-section-monitor">
        <div className="new-content">
          <h2 className="sub-header">Monitor</h2>
          <p className="subtext" style={{ color: '#33B3AE' }}>Revisit and review </p>
          <p className="subtext">your applications anytime to stay on top of your job search journey.</p>
        </div>
        <div className="new-image">
          {/* Add your image here */}
        </div>
      </div>
      <div className="faq-section">
        <h2>FAQ</h2>
        <h1>Frequently Asked Questions</h1>
        <p>Our go-to resource for all inquiries. Find answers to common questions about navigating the platform, optimizing your job search, and utilizing our tracking features to their fullest.</p>
      </div>

      <FAQDropdown />
      <Footer />
    </div>
  );
}

export default HomePage;
