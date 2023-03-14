import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Box } from '@mui/material';

// Reusable components
// How to reuse components?
import { Videos, ChannelCard } from './';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  // Based on id call api to fetch data of a specific channel
  // Renders as soon as component reload
  // Rerender when id changes as a dependency
  useEffect(() => {
    /**
     * import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/channels',
  params: {part: 'snippet,statistics', id: 'UCBVjMGOIkavEAhyqpxJ73Dw'},
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
    // Returns a promise
    // fetchFromAPI(`channels?part=snippet&id=${id}`).then(data => {
    //   console.log('Channel detail:');
    //   console.log(data);
    //   console.log('Test:');
    //   // console.log(data.items[0]);
    //   const { items } = data;
    //   console.log(items[0]);
    // });
    fetchFromAPI(`channels?part=snippet&id=${id}`).then(data =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(data =>
      setVideos(data?.items)
    );
  }, [id]);
  console.log('Channel detail:');
  console.log(channelDetail);
  console.log(videos);

  // return <div>{id}</div>;
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(206,3,184,1) 35%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      {/* Only apply small and higher */}
      <Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;

/**
 * import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    channelId: 'UCBVjMGOIkavEAhyqpxJ73Dw',
    part: 'snippet,id',
    order: 'date',
    maxResults: '50'
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
