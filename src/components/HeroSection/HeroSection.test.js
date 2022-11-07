import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { HeroSection } from ".";

describe("HeroSection", () => {
  describe("render", () => {
    const movie = {
      id: "238",
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      poster_path: "https://i.ibb.co/7RKxqhv/vito-corleone-the-godfather-4k-7k-1.png",
      character: "https://i.ibb.co/8X2H1K4/52638-original-1.png",
      release_date: "1972-03-14",
      title: "The Godfather",
      rating: 8.7,
      comments: [],
    };
    it("should render hero section component correctly when invoked", () => {
      render(<HeroSection movie={movie} />);
      const actualTitle = screen.getByText("The Godfather");
      const actualRating = screen.getByText("8.7 / 10");
      const actualReleaseDate = screen.getByText("1972-03-14");

      expect(actualTitle).toBeInTheDocument();
      expect(actualRating).toBeInTheDocument();
      expect(actualReleaseDate).toBeInTheDocument();
    });
  });
});
