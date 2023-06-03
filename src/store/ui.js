import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuShown: true,
};

const UISlice = createSlice({
  initialState,
  name: "ui",
  reducers: {
    showMenu(state) {
      state.isMenuShown = true;
    },
    hideMenu(state) {
      state.isMenuShown = false;
    },
    toggleMenu(state) {
      state.isMenuShown = !state.isMenuShown;
    },
  },
});

export const uiActions = UISlice.actions;
export default UISlice.reducer;
