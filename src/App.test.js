import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a link", () => {
  render(<App />);
  const linkElement = screen.getByText(/chima/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a link", () => {
  render(<App />);
  const linkElement = screen.getByText(/chima/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a link", () => {
  render(<App />);
  const linkElement = screen.getByText(/chima/i);
  expect(linkElement).toBeInTheDocument();
});
