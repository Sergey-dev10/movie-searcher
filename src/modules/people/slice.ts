import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { PeopleState, People } from "./types";

const initialState: PeopleState = {
  people: null,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    fetchPeopleSuccess(state, action: PayloadAction<People>) {
      state.people = action.payload;
    },
  },
});

export const { fetchPeopleSuccess } = peopleSlice.actions;
export default peopleSlice.reducer;
