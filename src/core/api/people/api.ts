import axios from "axios";
import {PEOPLE_URL} from "../../../constants/baseURL.ts";

export const fetchPeople = (page: number) => {
    return axios
        .get(PEOPLE_URL, {
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