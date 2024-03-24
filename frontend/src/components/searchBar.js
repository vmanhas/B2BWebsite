import React, { useState } from 'react';
import {TextField} from "@mui/material";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
      onSearch(event.target.value);
    };
  
    return (
      <div className="search-bar">
        <TextField
          label="Search Products..."
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    );
  };

export default SearchBar;