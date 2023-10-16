import axios from "axios";
import {
  SEARCH_MOVIES_URL,
  SEARCH_SHOWS_URL,
  SEARCH_PEOPLE_URL,
} from "../../../constants/baseURL.ts";

export const searchMovies = (query: string, page: number) => {
  return axios
    .get(SEARCH_MOVIES_URL, {
      params: {
        query: query,
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

export const searchShows = (query: string, page: number) => {
  return axios
    .get(SEARCH_SHOWS_URL, {
      params: {
        query: query,
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

export const searchPeople = (query: string, page: number) => {
  return axios
    .get(SEARCH_PEOPLE_URL, {
      params: {
        query: query,
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
