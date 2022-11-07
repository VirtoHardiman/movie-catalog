import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

import { MovieList } from ".";

describe("MovieList", () => {
  describe("render", () => {
    it("should render movie list page correctly when invoked", () => {
      render(
        <Router>
          <MovieList />
        </Router>
      );
      const actualMovieList = screen.getByTestId("movie-list");

      expect(actualMovieList).toBeInTheDocument();
    });
  });
});
