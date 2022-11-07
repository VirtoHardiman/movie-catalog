import axios from "axios";

const fetchMovies = async (searchParam, pageNumber, setError) => {
  try {
    if (searchParam) {
      const { data } = await axios.get(`https://json-server-movie-website.herokuapp.com/movies`, { params: { title_like: searchParam } });
      return data;
    }
    const { data } = await axios.get(`https://json-server-movie-website.herokuapp.com/movies`, { params: { _page: pageNumber, _limit: 8 } });
    return data;
  } catch (error) {
    setError(error.message);
    return [];
  }
};

export default {
  fetchMovies,
};
