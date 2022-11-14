import axios from "axios";

const fetchMovie = async (movieId) => {
  const { data } = await axios.get(
    `https://json-server-movie-website.herokuapp.com/movies/${movieId}`
  );
  return data;
};

const saveUpdatedComments = async (comments, movieId) => {
  try {
    await axios.patch(
      `https://json-server-movie-website.herokuapp.com/movies/${movieId}`,
      {
        comments,
      }
    );
    return "Comment added";
  } catch (error) {
    return error.message;
  }
};

export default {
  fetchMovie,
  saveUpdatedComments,
};
