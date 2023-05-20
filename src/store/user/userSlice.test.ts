import { UserDataStructure, UserTokenStructure } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it received an empty user data state and a loginUser action with a user data payload", () => {
    test("Then it should show the current user data state with the data from the user payload ", () => {
      const currentUserDataState: UserDataStructure = {
        id: "",
        name: "",
        token: "",
        isLogged: false,
      };

      const tokenMock = "tokenMock";

      const UserData: UserTokenStructure = {
        id: "42345sdfdf",
        name: "carlos",
        token: tokenMock,
      };

      const expectedUserDataState: UserDataStructure = {
        id: "42345sdfdf",
        name: "carlos",
        token: tokenMock,
        isLogged: true,
      };
      const loginUserAction = loginUserActionCreator(UserData);

      const newUserDataState = userReducer(
        currentUserDataState,
        loginUserAction
      );

      expect(newUserDataState).toStrictEqual(expectedUserDataState);
    });
  });
});
