import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EventService } from "../services";

const initialState = {
  events: [],
};

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (arg, thunkAPI) => {
    return await EventService.getAllEvents();
  }
);

const eventsSlice = createSlice({
  initialState,
  name: "events",
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.events = action.payload.data;
    });
  },
});

export const eventsActions = eventsSlice.actions;

export default eventsSlice.reducer;
