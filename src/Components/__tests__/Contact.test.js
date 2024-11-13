import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact"; // Adjust the path if needed

describe("Contact Us page testcases", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Is button there", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Expecting two input boxes", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);
  });
});
