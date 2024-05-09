import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateJob from './CreateJob';
import CreateCompany from './CreateCompanyModal';
import CreateSkill from './CreateSkill';
import './css/Sidebar.css';

const Sidebar = ({ onLogout, onJobCreate }) => {
  const [showJobsMenu, setShowJobsMenu] = useState(false);
  const [showCompaniesMenu, setShowCompaniesMenu] = useState(false);
  const [showSkillsMenu, setShowSkillsMenu] = useState(false);
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);
  const [showCreateCompanyModal, setShowCreateCompanyModal] = useState(false);
  const [showCreateSkillModal, setShowCreateSkillModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
  };

  const navigateToObjectViewer = (dataType) => {
    navigate('/viewer', { state: { type: dataType } });
  };

  const toggleMenu = (menu) => {
    setShowJobsMenu(false);
    setShowCompaniesMenu(false);
    setShowSkillsMenu(false);

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

  const handleCreateSkillClick = () => {
    setShowCreateSkillModal(true);
  };

  const closeModal = () => {
    setShowCreateJobModal(false);
    setShowCreateCompanyModal(false);
    setShowCreateSkillModal(false);
  };

  return (
    <div className="sidebar">
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
              <li onClick={handleCreateSkillClick}>Add Skills</li>
              <li><a href="#update-skills">Update Skills</a></li>
              <li><a href="#delete-skills">Delete Skills</a></li>
            </ul>
          )}
        </li>
        <li><a href="#sort-jobs">Sort Jobs</a></li>
        <li><a href="#user-settings">User Settings</a></li>
        <li className="logout" onClick={handleLogout}>Log Out</li>
      </ul>
      {showCreateJobModal && <CreateJob closeModal={closeModal} onJobCreate={onJobCreate} />}
      {showCreateCompanyModal && <CreateCompany closeModal={closeModal} />}
      {showCreateSkillModal && <CreateSkill closeModal={closeModal} onSkillCreate={(skill) => console.log('Skill created:', skill)} />}
    </div>
  );
};

export default Sidebar;
