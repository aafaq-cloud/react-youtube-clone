import axios from 'axios';

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';
// const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    // q: 'music',
    // part: 'snippet,id',
    // regionCode: 'US',
    maxResults: '50',
    // order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

//   baseUrl/getVideos
//   baseUrl/getChanner
// search
// video details
// pplaylist

export const fetchFromAPI = async url => {
  //   const response = await axios.get(`${BASE_URL}/${url}`, options);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// CALL IT FROM ANYWEHRE IMMEDIATELY IN OUR APPLICATION
