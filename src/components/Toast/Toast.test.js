import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Toast } from ".";

describe("Toast", () => {
  describe("render", () => {
    it("should render toast component correctly when invoked", () => {
      const condition = "Comment added";
      const mockSetPatchStatus = jest.fn();
      render(<Toast condition={condition} setPatchStatus={mockSetPatchStatus} />);
      const actualToast = screen.getByTestId("toast");
      const toastContent = screen.getByText("Comment added");

      expect(actualToast).toBeInTheDocument();
      expect(toastContent).toBeInTheDocument();
    });
  });
});
