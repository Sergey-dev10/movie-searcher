import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { FavoriteState, FavoriteItem } from "./types.ts";

const initialState: FavoriteState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "null") || [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      state.favorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
