import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateJob from './CreateJob';
import CreateCompany from './CreateCompanyModal';
import './css/Sidebar.css';

const Sidebar = ({ onLogout, onJobCreate }) => {
  const [showJobsMenu, setShowJobsMenu] = useState(false);
  const [showCompaniesMenu, setShowCompaniesMenu] = useState(false);
  const [showSkillsMenu, setShowSkillsMenu] = useState(false);
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);
  const [showCreateCompanyModal, setShowCreateCompanyModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic
    onLogout();
  };

  const navigateToObjectViewer = (dataType) => {
    navigate('/viewer', {state: { type: dataType }});
  };

  const toggleMenu = (menu) => {
    // Close all menus
    setShowJobsMenu(false);
    setShowCompaniesMenu(false);
    setShowSkillsMenu(false);

    // Toggle the selected menu
    if (menu === 'jobs') {
      setShowJobsMenu(!showJobsMenu);
    } else if (menu === 'companies') {
      setShowCompaniesMenu(!showCompaniesMenu);
    } else if (menu === 'skills') {
      setShowSkillsMenu(!showSkillsMenu);
    }
  };

  const handleCreateJobClick = () => {
    setShowCreateJobModal(true);
  };

  const handleCreateCompanyClick = () => {
    setShowCreateCompanyModal(true);
  };

  const closeModal = () => {
    setShowCreateJobModal(false);
    setShowCreateCompanyModal(false);
  };

  return (
    <div className="sidebar" style={{
        width: '100%',
        height: '100%',
        background: '#f0f0f0',
        position: 'relative', /* For submenu positioning context */
    }}>
        <div style={{
            padding: '0 10px'
        }}>
        <div style={{
            height: '75px',
            borderBottom: '1px solid black'
        }}>
            <h3>LOGO HERE</h3>

        </div>
        </div>
      <ul>
        <li><a href="/user-home">Home</a></li>

        <li onClick={() => toggleMenu('jobs')}>
          Jobs
          {showJobsMenu && (
            <ul className="submenu">
              <li onClick={handleCreateJobClick}>Create Job</li>
              <li onClick={() => navigateToObjectViewer('jobs')}>View Jobs</li>
            </ul>
          )}
        </li>

        <li onClick={() => toggleMenu('companies')}>
          Companies
          {showCompaniesMenu && (
            <ul className="submenu">
                <li onClick={handleCreateCompanyClick}>Create Company</li>
                <li onClick={() => navigateToObjectViewer('company')}>View Companies</li>
            </ul>
          )}
        </li>

        <li onClick={() => toggleMenu('skills')}>
          Skills
          {showSkillsMenu && (
            <ul className="submenu">
              <li><a href="#add-skills">Add Skills</a></li>
              <li><a href="#update-skills">Update Skills</a></li>
              <li><a href="#delete-skills">Delete Skills</a></li>
            </ul>
          )}
        </li>

        <li><a href="#sort-jobs">Sort Jobs</a></li>
        <li><a href="#user-settings">User Settings</a></li>
        <li className="logout" onClick={handleLogout}>Log Out</li>
      </ul>
      {showCreateJobModal && (
        <CreateJob closeModal={closeModal} onJobCreate={onJobCreate}/>
      )}
      {showCreateCompanyModal && (
        <CreateCompany closeModal={closeModal} />
      )}
    </div>
  );
};

export default Sidebar;
