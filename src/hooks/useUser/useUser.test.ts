import { renderHook } from "@testing-library/react";
import { tokenMock, userCredentialsMock } from "../../mocks/user/userMocks";
import useUser from "./useUser";

describe("Given a getUserToken function", () => {
  describe("When its called with username 'carlos' and pasword 'carlos'", () => {
    test("Then it should return a user token", async () => {
      const expectedToken = tokenMock;

      const user = userCredentialsMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());
      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });
});
