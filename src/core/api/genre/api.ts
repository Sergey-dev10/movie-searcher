import axios from "axios";
import {DISCOVER_MOVIES_URL, GENRE_URL} from "../../../constants/baseURL.ts";
export const fetchGenres = () => {
  return axios
    .get(GENRE_URL, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};

export const fetchMoviesByGenre = (
    page: number,
    genre: number,
) => {
    return axios
        .get(DISCOVER_MOVIES_URL, {
            params: {
                page: page,
                with_genres: genre ,
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
        });
};

