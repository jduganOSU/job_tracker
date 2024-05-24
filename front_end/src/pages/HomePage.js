import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Typed from 'typed.js';
import { motion, useAnimation } from "framer-motion";
import undrawStatsSVG from '../assets/undraw_stats.svg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FAQDropdown from '../components/FAQDropdown';
import "./css/HomePage.css";

export default function Homepage() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledAgain, setIsScrolledAgain] = useState(false);
  const [isScrolledGray, setIsScrolledGray] = useState(false);
  const controls = useAnimation();

  const navigate = useNavigate(); // Get the navigation function
  const el = useRef(null);

  // Function to handle login button click event
  const handleLoginButtonClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleScroll = () => {
    const currentScrollPosition =
      window.scrollY || document.documentElement.scrollTop;

    const greenCardPosition =
      document.querySelector(".green-card").offsetTop - 600; // Adjusted for margin
    const purpleCardPosition =
      document.querySelector(".purple-card").offsetTop - 600; // Adjusted for margin
    const grayCardPosition =
      document.querySelector(".gray-card").offsetTop - 600; // Adjusted for margin

    if (currentScrollPosition > greenCardPosition) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (currentScrollPosition > purpleCardPosition) {
      setIsScrolledAgain(true);
    } else {
      setIsScrolledAgain(false);
    }

    if (currentScrollPosition > grayCardPosition) {
      setIsScrolledGray(true);
    } else {
      setIsScrolledGray(false);
    }
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Apply.', 'Track.', 'Succeed.'],
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


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    });
  }, [controls]);

  return (
    <div className={`app ${isScrolled ? (isScrolledAgain ? "purple" : "green") : "black"} ${isScrolledGray ? "gray" : "black"}`}>
      <Navbar />
      <motion.div className="header" initial={{ y: -100, opacity: 0 }} animate={controls}>
        <div className="header-content">
          <h1>Your job journey simplified</h1>
          <div className="typing-animation">
            <span ref={el} className="typed-text"></span>
          </div>
          <h1 className="with-career-pilot">with Career Pilot.</h1>
          <p className="subtext">Empower your job search —track applications, follow-ups, and offers in one seamless dashboard.</p>
          <button className="login-button-medium" onClick={handleLoginButtonClick}>
            Sign Up
          </button>
        </div>
        <div className="image-section">
          <img src={undrawStatsSVG} alt="Undraw Stats" />
        </div>
      </motion.div>
      <motion.div className="card green-card"id="features" initial={{ y: 100, opacity: 0 }} animate={{ y: isScrolled ? 0 : 100, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <h1>
          <span className="blue-card-text">Streamline your job hunt </span>
          with real-time tracking of every application’s progress.
        </h1>
      </motion.div>
      <motion.div className="card black-card" initial={{ y: 100, opacity: 0 }} animate={{ y: isScrolled ? 0 : 100, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <h1>This is a test card for the site card for an image with text</h1>
      </motion.div>
      <motion.div className="card purple-card" initial={{ y: 100, opacity: 0 }} animate={{ y: isScrolled ? 0 : 100, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
        <h1>
          <span className="purple-card-text">Revisit and review </span>
          your applications anytime to stay on top of your job search journey.
        </h1>
      </motion.div>
      <motion.div className="card white-card" initial={{ y: 100, opacity: 0 }} animate={{ y: isScrolled ? 0 : 100, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
        <h1>This is another testing card</h1>
      </motion.div>
      <motion.div className="card gray-card" id="faq" initial={{ y: 25, opacity: 0 }} animate={{ y: isScrolledGray ? 0 : 25, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
        <h1>
          <span className="us-bank" style={{ color: '#a1a1a1' }}>Questions? <br /></span>
          View our FAQs
        </h1>
        <p style={{ fontSize: '16px', fontWeight: '600' }}>
          Explore commonly asked questions about Career Pilot to learn more about our platform and how it can benefit you in your job search journey.
        </p>
      </motion.div>
      <FAQDropdown />
      <Footer />
    </div>
  );
}
