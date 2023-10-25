import {generateYearList} from "../utils/generateYearList.ts";
export const yearList = generateYearList();

export const genres = [
    { label: "Action", value: 28 },
    { label: "Adventure", value: 12 },
    { label: "Animation", value: 16 },
    { label: "Comedy", value: 35 },
    { label: "Crime", value: 80 },
    { label: "Documentary", value: 99 },
    { label: "Drama", value: 18 },
    { label: "Family", value: 10751 },
    { label: "Fantasy", value: 14 },
    { label: "History", value: 36 },
    { label: "Horror", value: 27 },
    { label: "Music", value: 10402 },
    { label: "Mystery", value: 9648 },
    { label: "Romance", value: 10749 },
    { label: "Science Fiction", value: 878 },
    { label: "TV Movie", value: 10770 },
    { label: "Thriller", value: 53 },
    { label: "War", value: 10752 },
    { label: "Western", value: 37 },
];

export const genresShows = [
    { label: "Action & Adventure", value: 10759 },
    { label: "Animation", value: 16 },
    { label: "Comedy", value: 35 },
    { label: "Crime", value: 80 },
    { label: "Documentary", value: 99 },
    { label: "Drama", value: 18 },
    { label: "Family", value: 10751 },
    { label: "Kids", value: 10762 },
    { label: "Mystery", value: 9648 },
    { label: "News", value: 10763 },
    { label: "Reality", value: 10764 },
    { label: "Sci-Fi & Fantasy", value: 10765 },
    { label: "Soap", value: 10766 },
    { label: "Talk", value: 10767 },
    { label: "War & Politics", value: 10768 },
    { label: "Western", value: 37 },
];
export const sortMethods = [
    { label: "Popularity Descending", value: "popularity.desc" },
    { label: "Popularity Ascending", value: "popularity.asc" },
    { label: "Rating Descending", value: "vote_average.desc" },
    { label: "Rating Ascending", value: "vote_average.asc" },
    { label: "Release Date Descending", value: "release_date.desc" },
    { label: "Release Date Ascending", value: "release_date.asc" },
];