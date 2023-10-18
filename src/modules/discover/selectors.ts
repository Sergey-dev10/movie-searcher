import {RootState} from "../index.ts";

export const selectDiscoveredMovies = ({discover}: RootState) => discover.discovered?.results;
export const selectDiscoveredMoviesTotalPages = ({discover}: RootState) => discover.discovered?.total_pages;
export const selectDiscoveredMoviesTotalResults = ({discover}: RootState) => discover.discovered?.total_results;