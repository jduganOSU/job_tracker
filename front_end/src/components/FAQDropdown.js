import React, { useState } from 'react';
import './css/FAQDropdown.scss'; // Import Sass file

function FAQDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="card">
        <div className="card-header" onClick={handleToggle}>
          <h2>What is Career Pilot?</h2>
        </div>
        {isOpen && (
          <div className="card-body">
            <p>Career Pilot is a platform designed to help you track the jobs you've applied to. It allows you to manage your job applications, keep track of your progress, and stay organized throughout your job search journey.</p>
          </div>
        )}
      </div>
      <div className="card">
        <div className="card-header" onClick={handleToggle}>
          <h2>How do you use Career Pilot?</h2>
        </div>
        {isOpen && (
          <div className="card-body">
            <p>Using Career Pilot is a breeze! Begin by signing up, then effortlessly input your job details and status. Keep everything up-to-date with ease, ensuring your job search journey remains smooth and organized.</p>
          </div>
        )}
      </div>
      <div className="card">
        <div className="card-header" onClick={handleToggle}>
          <h2>Is Career Pilot free?</h2>
        </div>
        {isOpen && (
          <div className="card-body">
            <p>Absolutely! Career Pilot is completely free to use, empowering you to streamline your job search journey without any cost.</p>
          </div>
        )}
      </div>
      <div className="card">
        <div className="card-header" onClick={handleToggle}>
          <h2>Who can use Career Pilot?</h2>
        </div>
        {isOpen && (
          <div className="card-body">
            <p> Career Pilot is for everyone embarking on their job search journey, whether you're a recent graduate taking your first steps into the professional world or an experienced professional seeking new opportunities.</p>
          </div>
        )}
      </div>
    </div>
    
  );
}

export default FAQDropdown;
