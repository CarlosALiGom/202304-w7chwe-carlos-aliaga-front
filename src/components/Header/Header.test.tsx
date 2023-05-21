import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When the component is rendered", () => {
    test("Then it should show the logo with an alt text '!Facebook logo'", () => {
      const expectedAlternativeText = "!Facebook logo";
      const routes = [
        {
          path: "/",
          element: <Header />,
        },
      ];

      const router = createBrowserRouter(routes);

      render(<RouterProvider router={router} />);

      const logo = screen.getByAltText(expectedAlternativeText);

      expect(logo).toBeInTheDocument();
    });
  });
});
