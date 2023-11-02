import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = 'c691fe1f3a6a0b6dfbcb9eb08cd514ec';

export const fetchMovies = async params => {
  const { data } = await axios.get(`/trending/movie/day`, {
    params: {
      api_key: key,
      ...params,
    },
  });
  return data.results;
};

export const fetchMovieById = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id} `, {
    params: {
      api_key: key,
    },
  });
  return data;
};

export const fetchMovieCast = async movie_id => {
  const response = await axios.get(`movie/${movie_id}/credits?`, {
    params: {
      api_key: key,
    },
  });
  return response.data.cast;
};

export const fetchMovieReviews = async movie_id => {
  const response = await axios.get(`movie/${movie_id}/reviews?`, {
    params: {
      api_key: key,
    },
  });
  return response.data.results;
};

// export const handleSearch = async movieName => {
//   const response = await axios.get(`/search/movie?query=${movieName}`, {
//     params: {
//       api_key: key,
//     },
//   });
//   return response.data.results;
// };

export const searchMovies = async query => {
  try {
    const response = await axios.get('/search/movie', {
      params: {
        api_key: key,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
