import React from 'react';
import './css/ListItem.css';
import { deleteJob } from '../api/jobService';
import { deleteCompany } from '../api/companyService';
import { deleteSkill } from '../api/skillsService';
import { deleteContact } from '../api/contactService';

const ListItem = ({ item, type, onDelete }) => {
  const handleDelete = async () => {
    try {
      if (type === 'jobs') {
        await deleteJob(item._id);
      } else if (type === 'company') {
        await deleteCompany(item._id);
      } else if (type === 'skill') {
        await deleteSkill(item._id);
      } else if (type === 'contact') {
        await deleteContact(item._id);
      }
      onDelete(item._id);  // Callback to update UI
      alert('Item deleted successfully');
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
          <div>{Array.isArray(item.skills) ? item.skills.join(', ') : ''}</div> {/* Handle undefined skills */}
          <div>{item.status}</div>
        </>
      ) : type === 'company' ? (
        <>
          <div>{item.name}</div>
          <div>{item.location}</div>
          <div>{item.industry}</div>
          <div>{item.description}</div>
        </>
      ) : type === 'skill' ? (
        <>
          <div>{item.name}</div>
        </>
      ) : (
        <>
          <div>{item.name}</div>
          <div>{item.company?.name}</div> {/* Ensure this displays the company name */}
          <div>{item.role}</div>
          <div>{item.email}</div>
          <div>{item.phone}</div>
        </>
      )}
      <div className="buttonDiv">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ListItem;
