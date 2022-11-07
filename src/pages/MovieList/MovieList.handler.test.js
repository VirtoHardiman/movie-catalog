import axios from "axios";

import handler from "./MovieList.handler";
const { fetchMovies } = handler;
jest.mock("axios");

describe("MovieListHandler", () => {
  const mockSearchParam = null;
  const mockPageNumber = "1";
  const mockSetError = jest.fn();

  describe("fetchMovies", () => {
    it("should call axios.get with correct url and params when invoked", async () => {
      await fetchMovies(mockSearchParam, mockPageNumber, mockSetError);

      expect(axios.get).toBeCalledWith("https://json-server-movie-website.herokuapp.com/movies/movies", { params: { _page: mockPageNumber, _limit: 8 } });
    });

    it("should call setError function when axios.get return error", async () => {
      const error = {
        status: true,
        message: "Request failed with status code 404",
      };
      axios.get.mockRejectedValue(new Error("Request failed with status code 404"));
      await fetchMovies(mockSearchParam, mockPageNumber, mockSetError);

      expect(mockSetError).toBeCalledWith(error.message);
    });
  });
});
