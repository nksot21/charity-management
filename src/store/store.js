import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui";
import authReducer from "./auth";
import eventsReducers from "./events";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    events: eventsReducers,
  },
});

export default store;
