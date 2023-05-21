import Layout from "./Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("Given a Layout component", () => {
  describe("When its rendered", () => {
    const routes = [
      {
        path: "/",
        element: <Layout />,
      },
    ];

    test("Then it should show a header with the'!Facebook' text", () => {
      const expectedText = "!Facebook";

      const router = createBrowserRouter(routes);

      render(<RouterProvider router={router} />);

      const header = screen.getByRole("heading", {
        level: 1,
        name: expectedText,
      });

      expect(header).toBeInTheDocument();
    });
  });
});
