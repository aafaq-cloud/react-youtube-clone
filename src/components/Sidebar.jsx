import React from 'react';
import { Stack } from '@mui/material';

// import Categories from utils folder and it's an array of object
// Each object contains a name and icon i.e
//   { name: 'New', icon: <HomeIcon /> }
import { categories } from '../utils/constants';

//
// const selectedCategory = 'New';

// Instant return
// const Sidebar = () => {
//   return <div>Sidebar</div>;
// };
const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {/* Loop through categories */}
    {/* Return instantly */}
    {/* Add dynamic style based on condition */}
    {categories.map(category => (
      <button
        key={category.name}
        className="category-btn"
        // Add dynamic styles based on category name
        style={{
          background: category.name === selectedCategory && '#fc1503',
          color: '#fff',
        }}
        onClick={() => setSelectedCategory(category.name)}
      >
        <span
          style={{
            color: category.name === selectedCategory ? '#fff' : '#fc1503',
            marginRight: '15px',
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? '1' : '.8' }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
