import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import Mock_data from "../Mocks/resMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// We are mocking the fetch that is present inside the Body component.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(Mock_data),
  });
});

// As fetch is asynchronous operation
it("Should render the body with search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchButton);
  const resCards = screen.getAllByTestId("restaurant-card");
//   expect(resCards.length).toBe(2)
  expect(searchButton).toBeInTheDocument();
});
