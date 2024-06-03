import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoHome, IoBriefcase } from 'react-icons/io5';
import { IoIosSettings } from 'react-icons/io';
import { FaBuilding, FaSortAmountDown, FaListUl, FaAddressBook } from 'react-icons/fa';
import CreateJob from './CreateJob';
import CreateCompany from './CreateCompanyModal';
import CreateContact from './CreateContact';
import CreateSkill from './CreateSkill';
import './css/Sidebar.css';

const Sidebar = ({ onLogout, onJobCreate, onContactCreate, onSkillCreate, onSortChange }) => {
  const [showJobsMenu, setShowJobsMenu] = useState(false);
  const [showCompaniesMenu, setShowCompaniesMenu] = useState(false);
  const [showContactsMenu, setShowContactsMenu] = useState(false);
  const [showSkillsMenu, setShowSkillsMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false); // State for the sort menu
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);
  const [showCreateCompanyModal, setShowCreateCompanyModal] = useState(false);
  const [showCreateContactModal, setShowCreateContactModal] = useState(false);
  const [showCreateSkillModal, setShowCreateSkillModal] = useState(false);
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token or any other user session data
    navigate('/'); // Redirect to the main login page
  };

  const navigateToObjectViewer = (dataType, sortOption = null) => {
    navigate('/viewer', { state: { type: dataType, sortOption } });
  };

  const toggleMenu = (menu) => {
    setShowJobsMenu(false);
    setShowCompaniesMenu(false);
    setShowContactsMenu(false);
    setShowSkillsMenu(false);
    setShowSortMenu(false); // Reset sort menu state

    if (menu === 'jobs') {
      setShowJobsMenu(!showJobsMenu);
    } else if (menu === 'companies') {
      setShowCompaniesMenu(!showCompaniesMenu);
    } else if (menu === 'contacts') {
      setShowContactsMenu(!showContactsMenu);
    } else if (menu === 'skills') {
      setShowSkillsMenu(!showSkillsMenu);
    } else if (menu === 'sort') {
      setShowSortMenu(!showSortMenu);
    }
  };

  const handleCreateJobClick = () => {
    setShowCreateJobModal(true);
  };

  const handleCreateCompanyClick = () => {
    setShowCreateCompanyModal(true);
  };

  const handleCreateContactClick = () => {
    setShowCreateContactModal(true);
  };

  const handleCreateSkillClick = () => {
    setShowCreateSkillModal(true);
  };

  const closeModal = () => {
    setShowCreateJobModal(false);
    setShowCreateCompanyModal(false);
    setShowCreateContactModal(false);
    setShowCreateSkillModal(false);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowJobsMenu(false);
      setShowCompaniesMenu(false);
      setShowContactsMenu(false);
      setShowSkillsMenu(false);
      setShowSortMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSortChange = (sortOption) => {
    onSortChange(sortOption); // Pass sort option to parent component
    navigateToObjectViewer('jobs', sortOption); // Navigate to viewer with sort option
  };

  return (
    <div ref={sidebarRef} className="sidebar" style={{ width: '100%', height: '100%', background: '#f0f0f0', position: 'relative' }}>
      <div style={{ padding: '0 10px' }}>
        <div style={{ height: '75px', borderBottom: '1px solid lightgrey', fontWeight: 'bold', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.75px' }}>
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
        <li onClick={() => toggleMenu('contacts')}>
          <FaAddressBook />&nbsp;Contacts
          {showContactsMenu && (
            <ul className="submenu">
              <li onClick={handleCreateContactClick}>Create Contact</li>
              <li onClick={() => navigateToObjectViewer('contacts')}>View Contacts</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleMenu('skills')}>
          <FaListUl />&nbsp;Skills
          {showSkillsMenu && (
            <ul className="submenu">
              <li onClick={handleCreateSkillClick}>Create Skill</li>
              <li onClick={() => navigateToObjectViewer('skill')}>View Skills</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleMenu('sort')}>
          <FaSortAmountDown />&nbsp;Sort Jobs
          {showSortMenu && (
            <ul className="submenu">
              <li onClick={() => handleSortChange('title')}>By Title</li>
              <li onClick={() => handleSortChange('status')}>By Status</li>
              <li onClick={() => handleSortChange('company')}>By Company</li>
            </ul>
          )}
        </li>
        <li className="logout" onClick={handleLogout}>
          Log Out
        </li>
      </ul>
      {showCreateJobModal && <CreateJob closeModal={closeModal} onJobCreate={onJobCreate} />}
      {showCreateCompanyModal && <CreateCompany closeModal={closeModal} />}
      {showCreateContactModal && <CreateContact closeModal={closeModal} onContactCreate={onContactCreate} />}
      {showCreateSkillModal && <CreateSkill closeModal={closeModal} onSkillCreate={onSkillCreate} />}
    </div>
  );
};

export default Sidebar;
