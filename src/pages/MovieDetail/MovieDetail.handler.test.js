import axios from "axios";

import handler from "./MovieDetail.handler";
const { fetchMovie, saveUpdatedComments } = handler;
jest.mock("axios");

describe("MovieDetailHandler", () => {
  //   const mockSearchParam = null;
  //   const mockPageNumber = "1";
  //   const mockSetError = jest.fn();

  describe("fetchMovie", () => {
    const data = {};
    const movieId = 1;
    it("should call axios.get with correct url when invoked", async () => {
      axios.get.mockResolvedValue({ data });
      await fetchMovie(movieId);

      expect(axios.get).toBeCalledWith(`https://json-server-movie-website.herokuapp.com/movies/movies/${movieId}`);
    });
  });

  describe("saveUpdatedComments", () => {
    const comments = [{}];
    const movieId = 1;
    it("should call axios.patch with correct url and comments data", async () => {
      await saveUpdatedComments(comments, movieId);

      expect(axios.patch).toBeCalledWith(`https://json-server-movie-website.herokuapp.com/movies/movies/${movieId}`, {
        comments,
      });
    });
  });
});
