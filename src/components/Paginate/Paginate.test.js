import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Paginate } from ".";

describe("Paginate", () => {
  describe("render", () => {
    const pageNumber = 1;
    const mocksetPageNumber = jest.fn();
    it("should render paginate component correctly when invoked", () => {
      render(<Paginate pageNumber={pageNumber} setPageNumber={mocksetPageNumber} />);
      const actualPageButtons = screen.getAllByRole("button");
      expect(actualPageButtons.length).toBe(3);
    });
  });
});
