import React, { useState } from 'react';
import './css/SearchBar.css'; // Make sure your CSS file is correctly linked

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                placeholder="Search jobs by title or skills..."
                className="search-input"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;
