import axios from "axios";
import {DISCOVER_SHOWS_URL, SHOW_URL} from "../../../constants/baseURL.ts";

export const fetchShows = (
    page: number,
    year?: number,
    genre?: number,
    sortBy?: string,
) => {
    return axios
        .get(DISCOVER_SHOWS_URL, {
            params: {
                page: page,
                ...(year && { first_air_date_year: year }),
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

export const fetchShow = (id: number) => {
    return axios
        .get(`${SHOW_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
        });
};