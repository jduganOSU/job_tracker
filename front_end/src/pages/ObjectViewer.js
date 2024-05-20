import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ListView from '../components/ListView';
import { getAllJobs, deleteJob } from '../api/jobService';
import { getAllCompanies, deleteCompany } from '../api/companyService';
import { getAllSkills } from '../api/skillsService';


const Viewer = () => {
    const [items, setItems] = useState([]);
    const location = useLocation();
    const { type } = location.state || { type: 'jobs' };

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
              }
              setItems(data);
          } catch (error) {
              console.error(`Failed to fetch ${type}:`, error);
          }
      };
  
      fetchData();
  }, [type]); // Dependency array
  

    const handleDelete = async (id) => {
        try {
            if (type === 'jobs') {
                await deleteJob(id);
            } else if (type === 'company') {
                await deleteCompany(id);
            }
            // Update the state to remove the deleted item
            setItems(items.filter(item => item._id !== id));
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
            <div className='sidebarDiv' style={{
                height: '100vh',
                width: '15%'
            }}>
                <Sidebar onLogout={handleLogout} />
            </div>
            <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
                <h1 style={{ color: 'white' }}>View your Objects</h1>
                <div>
                    <h1 style={{color: 'white'}}>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
                    <ListView items={items} type={type} onDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
};

export default Viewer;
