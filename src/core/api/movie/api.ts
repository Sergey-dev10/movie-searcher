import axios from "axios";
import {
  UPCOMING_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  MOVIE_URL,
} from "../../../constants/baseURL";
export const getUpcomingMovies = (page: number) => {
  return axios
    .get(UPCOMING_MOVIES_URL, {
      params: {
        page: page,
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

export const getTopRatedMovies = (page: number) => {
  return axios
    .get(TOP_RATED_MOVIES_URL, {
      params: {
        page: page,
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

export const getMovie = (id: number) => {
    return axios
        .get(`${MOVIE_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
        });
};
