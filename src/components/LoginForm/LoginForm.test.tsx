import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

describe("Given a LoginForm component", () => {
  const submitForm = vi.fn();
  const usernameLabelText = "Username:";
  const passwordLabelText = "Password:";

  render(<LoginForm submitForm={submitForm} />);

  describe("When it is render", () => {
    test("Then it should show a heading with 'Login'", () => {
      const text = "Login";

      const heading = screen.getByRole("heading", { name: text, level: 2 });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When the username input and the password input are not empty", () => {
    test("Then the button should be enabled", async () => {
      render(<LoginForm submitForm={submitForm} />);

      const button = screen.getByRole("button");

      await userEvent.type(screen.getByLabelText(usernameLabelText), "Marc");
      await userEvent.type(
        screen.getByLabelText(passwordLabelText),
        "password"
      );

      expect(button).toBeEnabled();
    });
  });
});
