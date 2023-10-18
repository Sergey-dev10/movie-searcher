import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";
import {DiscoveredState} from "./types.ts";
import { Movies } from "../movie/types";

const initialState: DiscoveredState = {
    discovered: null,
};

const discoverSlice = createSlice({
    name: "discover",
    initialState,
    reducers: {
        fetchDiscoveredMoviesSuccess: (state, action: PayloadAction<Movies>) => {
            state.discovered = action.payload;
        },
    },
});

export const {fetchDiscoveredMoviesSuccess} = discoverSlice.actions;
export default discoverSlice.reducer;