import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CommentList } from ".";

describe("CommentList", () => {
  describe("render", () => {
    const comments = [];
    it("should render comment list component correctly when invoked", () => {
      render(<CommentList comments={comments} />);
      const actualCommentList = screen.getByTestId("comment-list");

      expect(actualCommentList).toBeInTheDocument();
    });
  });
});
