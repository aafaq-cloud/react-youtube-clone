// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// // import ReactPlayer from 'react-player/youtube';
// // import ReactPlayer from 'react-player/lazy';
// import ReactPlayer from 'react-player';
// import { Typography, Box, Stack } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// import { Videos } from './';
// import { fetchFromAPI } from './../utils/fetchFromAPI';

// const VideoDetail = () => {
//   const [videoDetail, setVideoDetail] = useState(null);
//   const [videos, setVideos] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     // Get data and set into a new state field
//     // fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
//     //   data => {
//     //     console.log('Video data:');
//     //     console.log(data);
//     //   }
//     // );

//     fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(data =>
//       setVideoDetail(data.items[0])
//     );

//     // Get related videos
//     fetchFromAPI(`search?relatedToVideoId=${id}&type=video`).then(data =>
//       setVideos(data.items)
//     );
//   }, [id]);

//   // Destructuring
//   // const { snippet } = videoDetail;
//   // const snippet = videoDetail?.snippet;

//   // Snippet broke
//   // Cannot read property of null
//   // It means sometimes snippet doesn't have all the necessary data and the reason for that is that sometimes the data has not been loaded yet
//   if (!videoDetail?.snippet) return 'Loading...';
//   // Extract title from snippet
//   // Out of the snippet and move into statistics
//   // var { title, channelId, channelTitle } = snippet;

//   console.log('Related videos:');
//   console.log(videos);
//   const {
//     snippet: { title, channelId, channelTitle },
//     statistics: { viewCount, likeCount },
//   } = videoDetail;

//   return (
//     <Box minHeight="95vh">
//       <Stack dirction={{ xs: 'column', md: 'row' }}>
//         <Box>
//           <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
//             {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
//             {/* Use vide data to render React Player */}
//             <ReactPlayer
//               url={`https://www.youtube.com/watch?v=${id}`}
//               className="react-player"
//               // width="100%"
//               // height="100%"
//               controls
//             />
//             {/* Note: All of our data is stored in video detail */}
//             <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
//               {/* Destructuring */}
//               {/* Video Detail:{videoDetail?.snippet.title} */}
//               {/* Video Detail:{videoDetail?.snippet.description} */}
//               {title}
//             </Typography>
//             <Stack
//               direction="row"
//               justifyContent="space-between"
//               sx={{ color: '#fff' }}
//               px={2}
//               py={1}
//             >
//               <Link to={`/channel/${channelId}`}>
//                 <Typography variant={{ sm: 'subtitle', md: 'h6' }} color="#fff">
//                   {channelTitle}
//                   <CheckCircleIcon
//                     sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
//                   />
//                 </Typography>
//               </Link>
//               {/*  */}
//               <Stack direction="row" gap="20px" alignItems="center">
//                 <Typography variant="body1" sx={{ opacity: 0.7 }}>
//                   {/* Human readable string */}
//                   {parseInt(viewCount).toLocaleString()} views
//                 </Typography>
//                 <Typography
//                   variant={{ sm: 'subtitle1', md: 'h6' }}
//                   sx={{ opacity: 0.7 }}
//                 >
//                   {/* Human readable string */}
//                   {parseInt(likeCount).toLocaleString()} views
//                 </Typography>
//               </Stack>
//             </Stack>
//           </Box>
//         </Box>
//         <Box
//           px={2}
//           py={{ md: 1, xs: 5 }}
//           justifyContent="center"
//           alignItems="center"
//         >
//           {/* {videos && <Videos videos={videos} />} */}
//           <Videos videos={videos} direction="column" />
//         </Box>
//       </Stack>
//     </Box>
//   );
// };

// export default VideoDetail;

// /**
//  * import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/videos',
//   params: {part: 'contentDetails,snippet,statistics', id: '7ghhRHRP6t4'},
//   headers: {
//     'X-RapidAPI-Key': '719b252b8bmshdedac4f15d3ee06p19b7f4jsn39a2f5b73519',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
//  */

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy';
import { Typography, Box, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(data =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      data => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return 'Loading...';

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              width="100%"
              height="100%"
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
