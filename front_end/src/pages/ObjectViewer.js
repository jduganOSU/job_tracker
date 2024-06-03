import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ListView from '../components/ListView';
import { getAllJobs, deleteJob } from '../api/jobService';
import { getAllCompanies, deleteCompany } from '../api/companyService';
import { getAllSkills, deleteSkill } from '../api/skillsService';
import { getAllContacts, deleteContact } from '../api/contactService';

const Viewer = () => {
  const [items, setItems] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const location = useLocation();
  const { type, sortOption } = location.state || { type: 'jobs' };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = [];
        if (type === 'jobs') {
          data = await getAllJobs();
        } else if (type === 'company') {
          data = await getAllCompanies();
        } else if (type === 'skill') {
          data = await getAllSkills();
        } else if (type === 'contacts') {
          data = await getAllContacts(); // Fetch contacts
        }
        setItems(data);
      } catch (error) {
        console.error(`Failed to fetch ${type}:`, error);
      }
    };

    fetchData();
  }, [type]);

  useEffect(() => {
    const sortItems = (items, criteria) => {
      if (!criteria) return items;
      return items.sort((a, b) => {
        if (a[criteria] < b[criteria]) return -1;
        if (a[criteria] > b[criteria]) return 1;
        return 0;
      });
    };
    setItems((prevItems) => sortItems([...prevItems], sortOption || sortCriteria));
  }, [sortCriteria, sortOption]);

  const handleDelete = async (id) => {
    try {
      if (type === 'jobs') {
        await deleteJob(id);
      } else if (type === 'company') {
        await deleteCompany(id);
      } else if (type === 'skill') {
        await deleteSkill(id);
      } else if (type === 'contacts') {
        await deleteContact(id);
      }
      setItems((prevItems) => prevItems.filter(item => item._id !== id));
      console.log(`${type} deleted successfully.`);
    } catch (error) {
      console.error(`Failed to delete ${type}:`, error);
    }
  };

  const handleLogout = () => {
    console.log('Logout');
    // Implement logout logic here
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className='sidebarDiv' style={{ height: '100vh', width: '15%' }}>
        <Sidebar onLogout={handleLogout} onSortChange={setSortCriteria} />
      </div>
      <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: 'white' }}>View your Objects</h1>
        <div>
          <h1 style={{ color: 'white' }}>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
          <ListView items={items} type={type} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Viewer;
