import React from 'react';
import './css/ListItem.css';

const ListItem = ({ item, type }) => {
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
    </div>
  );
};

export default ListItem;
