import { createSlice } from "@reduxjs/toolkit";

const InitialState: User = {
  fullName: "",
  isAuth: false,
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: InitialState,
  reducers: {
    setUserData: (state, action) => {
      state.fullName = action.payload.fullName;
      state.isAuth = action.payload.isAuth;
      state.token = action.payload.token;

      localStorage.setItem("authToken", action.payload.token);
    },
    setSignOut: (state) => {
      state.fullName = "";
      state.isAuth = false;
      state.token = "";

      localStorage.removeItem("authToken");
    },
  },
});

export const { setUserData, setSignOut } = userSlice.actions;

export default userSlice.reducer;
