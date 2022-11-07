import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

import { MovieDetail } from ".";

describe("MovieDetail", () => {
  describe("render", () => {
    it("should render movie detail page correctly when invoked", () => {
      render(
        <Router>
          <MovieDetail />
        </Router>
      );
      const actualMovieDetail = screen.getByTestId("movie-detail");

      expect(actualMovieDetail).toBeInTheDocument();
    });
  });
});
