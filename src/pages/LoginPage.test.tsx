import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("Given a LoginFormPage component", () => {
  describe("When it is render", () => {
    test("Then it should show a heading with 'Login'", () => {
      const text = "Login";

      render(<LoginPage />);

      const heading = screen.getByRole("heading", { name: text, level: 2 });

      expect(heading).toBeInTheDocument();
    });
  });
});
