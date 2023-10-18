import axios from "axios";
import { TRENDING_MOVIES_URL } from "../../../constants/baseURL.ts";

export const fetchTrendingMovies = (page: number) => {
  return axios
    .get(TRENDING_MOVIES_URL, {
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
