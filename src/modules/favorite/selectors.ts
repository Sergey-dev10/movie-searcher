import {RootState} from "../index.ts";

export const selectFavorites = ({favorite}: RootState) => favorite.favorites;