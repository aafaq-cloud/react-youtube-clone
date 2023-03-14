import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const navigate = useNavigate();

  console.log('SearchBar component...');

  // If user submit forms then navigate programmatically
  const submitHandler = e => {
    e.preventDefault();

    // If search terms exists mesaning soemthing enter in the search bar field
    if (searchTerm) {
      // Navigate to a dynamic url
      navigate(`/search/${searchTerm}`);

      // Reset
      searchTerm('');
    }
  };

  // The paper is going to be a form
  return (
    <Paper
      component="form"
      onSubmit={submitHandler}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        // Specific style for specific devices
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => {
          setsearchTerm(e.target.value);
        }}
      />
      {/* Button for icon */}
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
