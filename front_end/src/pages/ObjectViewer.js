import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // Make sure the import path is correct
import ListView from '../components/ListView';
import { getAllJobs } from '../api/jobService';
import { getAllCompanies } from '../api/companyService';

const Viewer = () => {
    const [items, setItems] = useState([]);
    const location = useLocation();
    const { type } = location.state || { type: 'jobs' };

    useEffect(() => {
        console.log(type);
        const fetchData = async () => {
          try {
            let data = [];
            if (type === 'jobs') {
              data = await getAllJobs();
            } else if (type === 'company') {
              data = await getAllCompanies();
            }
            setItems(data);
          } catch (error) {
            console.error(`Failed to fetch ${type}:`, error);
          }
        };
    
        fetchData();
      }, [type]);

    const handleLogout = () => {
        // Logic to handle user logout, e.g., clear user data, redirect to login page
        console.log('Logout');
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
                    <h1 style={{color: 'white'}}>{type.charAt(0).toUpperCase() + type.slice(1)}</h1> {/* Capitalizes the first letter */}
                    <ListView items={items} type={type}/>
                </div>
        </div>
        </div>
    );
    };

    export default Viewer;
