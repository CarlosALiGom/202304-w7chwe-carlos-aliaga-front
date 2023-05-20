import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataStructure, UserTokenStructure } from "./types";

const initialUserState: UserDataStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      _currentUserState: UserDataStructure,
      action: PayloadAction<UserTokenStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
