import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders the Header component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check if the header title exists
  const headerElement = screen.getByText(/REACT REDUX SHOPPING CART/i);
  expect(headerElement).toBeInTheDocument();
});
