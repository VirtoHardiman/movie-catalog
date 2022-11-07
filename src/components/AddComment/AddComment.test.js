import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { AddComment } from ".";

describe("AddComment", () => {
  describe("render", () => {
    const mockSaveComment = jest.fn();
    it("should render add comment component correctly when invoked", () => {
      render(<AddComment saveComment={mockSaveComment} />);
      const actualAddComment = screen.getByTestId("add-comment");

      expect(actualAddComment).toBeInTheDocument();
    });
  });
});
