import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import Mock_Data from "../Mocks/resCardDataMock.json";

it("Should have data from API", () => {
  render(<RestaurantCard resData={Mock_Data} />);
  const restroName = screen.getByText("Pizza Hut");
  expect(restroName).toBeInTheDocument();
});
