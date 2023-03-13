import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
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
      <div>Main</div>
    </Stack>
  );
};

export default Feed;
