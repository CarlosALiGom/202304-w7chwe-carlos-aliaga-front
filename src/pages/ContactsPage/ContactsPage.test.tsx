import { render, screen } from "@testing-library/react";
import ContactsPage from "./ContactsPage";

describe("Given a ContactsPage component", () => {
  describe("When it is render", () => {
    test("Then it should show a heading with '!Frenemies'", () => {
      const text = "!Frenemies";

      render(<ContactsPage />);

      const heading = screen.getByRole("heading", { name: text, level: 2 });

      expect(heading).toBeInTheDocument();
    });
  });
});
