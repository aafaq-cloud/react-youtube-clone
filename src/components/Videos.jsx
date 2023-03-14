import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos }) => {
  console.log('Videos');
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* We want to render a video card
            Note: There are two types of videos:
            1. Profile (Channel consisting of videos)
            2. Video
          */}
          {/* If there is a video then we're going to render a Video Card Component */}
          {/* If item has an id and id is a video id */}
          {/* id:{kind: 'youtube#video', videoId: 'xEgGAzU-rLY'} */}
          {/* Pass video prop */}
          {item.id.videoId && <VideoCard video={item} />}
          {/* If channel id then there is a channel which contains videos */}
          {/* Comment out ChannelCard and focus on VideoCard first */}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
