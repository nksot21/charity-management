import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: user,
  role: user ? user.role : "GUESS",
  isLoggedIn: false,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    logUserIn(state, action) {
      state.user = action.payload;
    },

    logUserOut(state) {
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
