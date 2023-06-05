import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: user,
  role: user ? user.role : "GUESS",
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    logUserIn(state, action) {
      state.user = action.payload;
      state.role = state.user.role;
    },

    logUserOut(state) {
        state.user = null;
        state.role = "GUESS"
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
