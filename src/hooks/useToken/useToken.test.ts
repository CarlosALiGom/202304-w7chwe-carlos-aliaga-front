import { realTokenMock, userTokenDataMock } from "../../mocks/mocks";
import useToken from "./useToken";

describe("Given a useToken function", () => {
  describe("When it receives a token", () => {
    test("Then it should call the getTokenData function and return the decode token", () => {
      const expectedUserTokenData = userTokenDataMock;

      const { getTokenData } = useToken();

      const userTokenData = getTokenData(realTokenMock);

      expect(userTokenData).toStrictEqual(expectedUserTokenData);
    });
  });
});
