import React from 'react';
import ListItem from './ListItem';
import './css/ListView.css';  // Ensure you have appropriate CSS for ListView

const ListView = ({ items, type }) => {
  const jobHeaders = ["Job Title", "Description", "Company", "Skills", "Status"];
  const companyHeaders = ["Company Name", "Location", "Industry", "Description"];

  // Determine which headers to use based on the type
  const headers = type === 'jobs' ? jobHeaders : companyHeaders;

  const gridTemplateColumns = type === 'jobs' ? "2fr 3fr 2fr 2fr 1fr" : "2fr 3fr 2fr 3fr";

  return (
    <div className="list-view" style={{ gridTemplateColumns }}>
      <div className="grid-header">
        {headers.map(header => (
          <div key={header} className="header-cell">{header}</div>
        ))}
      </div>
      {items.map(item => (
        <ListItem key={item._id} item={item} type={type} />
      ))}
    </div>
  );
};

export default ListView;
