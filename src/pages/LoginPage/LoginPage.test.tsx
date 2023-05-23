import { screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import renderWithProviders from "../../utils/testUtils";

describe("Given a LoginFormPage component", () => {
  describe("When it is render", () => {
    test("Then it should show a heading with 'Login'", () => {
      const text = "Login";

      renderWithProviders(<LoginPage />);

      const heading = screen.getByRole("heading", { name: text, level: 2 });

      expect(heading).toBeInTheDocument();
    });
  });
});
