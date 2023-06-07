import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EventService } from "../services";

const initialState = {
  events: [],
};

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (arg, thunkAPI) => {
    const events = (await EventService.getAllEvents()) || [];
    const mappedEvents = await Promise.all(
      events.data.map(async (e) => {
        let joinedDonors;
        await EventService.getJoinedDonors(e.id)
          .then((res) => (joinedDonors = res.data))
          .catch((e) => {
            throw e;
          });
        return { ...e, donorsQuantity: joinedDonors.length };
      })
    );
    return mappedEvents;
  }
);

const eventsSlice = createSlice({
  initialState,
  name: "events",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events = action.payload;
    });
  },
});

export const eventsActions = eventsSlice.actions;

export default eventsSlice.reducer;
