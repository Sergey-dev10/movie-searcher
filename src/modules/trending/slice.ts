import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";
import {TrendingState} from "./types";
import {Movies} from "../movie/types";

const initialState: TrendingState = {
    trending: null,
};

const trendingSlice = createSlice({
    name: "trending",
    initialState,
    reducers: {
        fetchTrendingMoviesSuccess: (state, action: PayloadAction<Movies>) => {
            state.trending = action.payload;
        }
    }
});

export const {fetchTrendingMoviesSuccess} = trendingSlice.actions;
export default trendingSlice.reducer;