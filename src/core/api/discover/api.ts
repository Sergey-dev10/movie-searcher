import axios from "axios";
import { DISCOVER_MOVIES_URL } from "../../../constants/baseURL.ts";

export const fetchDiscoverMovies = (
  page: number,
  year?: number,
  genre?: number,
  sortBy?: string,
) => {
  return axios
    .get(DISCOVER_MOVIES_URL, {
      params: {
        page: page,
        ...(year && { primary_release_year: year }),
        ...(genre && { with_genres: genre }),
        ...(sortBy && { sort_by: sortBy }),
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
