import React from 'react';
import ListItem from './ListItem';
import './css/ListView.css';  // Ensure you have appropriate CSS for ListView

const ListView = ({ items, type, onDelete }) => {
  const jobHeaders = ["Job Title", "Description", "Company", "Skills", "Status", "Delete"];
  const companyHeaders = ["Company Name", "Location", "Industry", "Description", "Delete"];
  const contactHeaders = ["Name", "Company", "Role", "Email", "Phone", "Delete"]
  const skillsHeaders = ["Name", "Delete"]

  // Determine which headers to use based on the type
  let headers;
  let gridTemplateColumns;

  if (type === 'jobs') {
    headers = jobHeaders;
    gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr .5fr";
  } else if (type === 'contacts') {
    headers = contactHeaders;
    gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr .5fr";
  } else if (type === 'company' ){
    headers = companyHeaders;
    gridTemplateColumns = "1fr 1fr 1fr 1fr .5fr";
  } else {
    headers = skillsHeaders;
    gridTemplateColumns = "1fr 1fr"
  }

  return (
    <div className="list-view" style={{ gridTemplateColumns }}>
      <div className="grid-header">
        {headers.map(header => (
          <div key={header} className="header-cell">{header}</div>
        ))}
      </div>
      {items.map(item => (
        <ListItem key={item._id} item={item} type={type} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ListView;
