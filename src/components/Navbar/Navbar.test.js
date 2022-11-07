import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from ".";

describe("Navbar", () => {
  describe("render", () => {
    const theme = "light";
    it("should render navbar component correctly when invoked", () => {
      render(
        <Router>
          <Navbar theme={theme} />
        </Router>
      );
      const actualNavbar = screen.getByRole("navigation");

      expect(actualNavbar).toBeInTheDocument();
    });
  });
});
