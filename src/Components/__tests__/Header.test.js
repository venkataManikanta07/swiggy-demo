import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { execPath } from "process";

it("should load header component with login button", () => {
  render(
    // {Has link tag - Jest can't understand - providing BrowserRouter to it}
    <BrowserRouter>
      {/* Jest can't understand Redux also - wrap with the provider   */}
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should Load Cart with 0 Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByText("");
  const cartItemCount = screen.getByText("0");
  expect(cartItemCount).toBeInTheDocument();
});

it("Should turn the login button to logout after clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
