import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoHome, IoBriefcase } from 'react-icons/io5';
import { IoIosSettings } from 'react-icons/io';
import { FaBuilding, FaSortAmountDown } from 'react-icons/fa';
import { FaListCheck } from 'react-icons/fa6';
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
          borderBottom: '1px solid lightgrey',
          fontWeight: 'bold',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '0.75px'
        }}>
          <h3>Career Pilot</h3>

        </div>
      </div>
      <ul>
        <li>
          <IoHome /><a href="/user-home"> Home</a>
        </li>
        <li onClick={() => toggleMenu('jobs')}>
          <IoBriefcase />&nbsp;Jobs
          {showJobsMenu && (
            <ul className="submenu">
              <li onClick={handleCreateJobClick}>Create Job</li>
              <li onClick={() => navigateToObjectViewer('jobs')}>View Jobs</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleMenu('companies')}>
          <FaBuilding />&nbsp;Companies
          {showCompaniesMenu && (
            <ul className="submenu">
              <li onClick={handleCreateCompanyClick}>Create Company</li>
              <li onClick={() => navigateToObjectViewer('company')}>View Companies</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleMenu('skills')}>
          <FaListCheck />&nbsp;Skills
          {showSkillsMenu && (
            <ul className="submenu">
              <li onClick={handleCreateSkillClick}>Add Skills</li>
              <li><a href="#update-skills">Update Skills</a></li>
              <li><a href="#delete-skills">Delete Skills</a></li>
            </ul>
          )}
        </li>
        <li>
          <FaSortAmountDown />&nbsp;Sort Jobs
        </li>
        <li>
          <IoIosSettings /><a href="#">&nbsp;User Settings</a>
        </li>
        <li className="logout" onClick={handleLogout}>
          Log Out
        </li>
      </ul>
      {showCreateJobModal && <CreateJob closeModal={closeModal} onJobCreate={onJobCreate} />}
      {showCreateCompanyModal && <CreateCompany closeModal={closeModal} />}
      {showCreateSkillModal && <CreateSkill closeModal={closeModal} onSkillCreate={(skill) => console.log('Skill created:', skill)} />}
    </div>
  );
};

export default Sidebar;
