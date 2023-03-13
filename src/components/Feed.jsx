import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
// Because we're already in the components folder
import { Sidebar, Videos } from './';
// Most important component of our
const Feed = () => {
  // It contains Sidebar and VideoFeed
  // Wrapper which wrap SideBar and VideoFeed
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023 JSM Media
        </Typography>
      </Box>
      {/* flex: 2 makes more space than the sidebar */}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: '#fff' }}
        >
          New <span style={{ color: '#F31503' }}>videos</span>
        </Typography>
        {/* Pass props to Videos */}
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
