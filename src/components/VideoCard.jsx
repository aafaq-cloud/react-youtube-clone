import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CheckCircle } from '@mui/icons-material';

// When we click on card then navigate to video detail
// For fallback
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';

// id: {kind: 'youtube#video', videoId: 'Xoz31I1FuiY'}
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(videoId);
  return (
    <Card
      sx={{
        width: { xs: '100%', md: '320px' },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.channelTitle}
          // sx={{ height: 358 }}
          // sx={{ width: 358, height: 180, objectFit: 'cover' }}
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: '#1e1e1e',
          height: '106px',
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        {/* Point to channel */}
        <Link
          to={
            snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
