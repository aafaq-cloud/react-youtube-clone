import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
// Because we're already in the components folder
import { Videos } from './';

import { fetchFromAPI } from './../utils/fetchFromAPI';

// Call function as soon as our feed loads immediately fetch the data so we should use useEffect hook. It's a lifecycle hook

// Most important component of our
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  // Get search query and pass dynamically to fetch api
  const { searchTerm } = useParams();

  useEffect(() => {
    console.log('Use Effect function in Feed Component');
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(data => {
      console.log('Videos data of a specific category:');
      console.log(data.items);

      setVideos(data.items);
    });
    // Recall this function when we change this category
    // Pass searchTerm as a dependency so that it's get updated every time we search for something
  }, [searchTerm]);

  // It contains Sidebar and VideoFeed
  // Wrapper which wrap SideBar and VideoFeed
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
        Search Results for:{' '}
        <span style={{ color: '#F31503' }}>{searchTerm} videos</span>
      </Typography>
      {/* Pass props to Videos */}
      {/* <Videos videos={[]} /> */}
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;

/**
 * import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': '719b252b8bmshdedac4f15d3ee06p19b7f4jsn39a2f5b73519',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
 */
