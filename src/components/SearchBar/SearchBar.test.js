import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { SearchBar } from ".";

describe("AddComment", () => {
  describe("render", () => {
    const mockHandleSearch = jest.fn();
    it("should render search bar component correctly when invoked", () => {
      render(<SearchBar handleSearch={mockHandleSearch} />);
      const actualSearchBar = screen.getByTestId("searchbar");

      expect(actualSearchBar).toBeInTheDocument();
    });
  });
});
