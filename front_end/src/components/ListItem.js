import React from 'react';
import './css/ListItem.css';
import { deleteJob } from '../api/jobService';
import { deleteCompany } from '../api/companyService';

const ListItem = ({ item, type, onDelete }) => {
  const handleDelete = async () => {
    try {
      if (type === 'jobs') {
        await deleteJob(item._id);
      } else if (type === 'companies') {
        await deleteCompany(item._id);
      }
      onDelete(item._id);  // Callback to update UI
      console.log(`${type.slice(0, -1)} deleted successfully`);
    } catch (error) {
      console.error(`Failed to delete ${type.slice(0, -1)}:`, error);
    }
  };

  return (
    <div className="list-item">
      {type === 'jobs' ? (
        <>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.company}</div>
          <div>{item.skills}</div>
          <div>{item.status}</div>
        </>
      ) : (
        <>
          <div>{item.name}</div>
          <div>{item.location}</div>
          <div>{item.industry}</div>
          <div>{item.description}</div>
        </>
      )}
      <div className="buttonDiv">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ListItem;
