import {RootState} from "../index.ts";

export const selectPeople = ({people}: RootState) => people.people?.results;
export const selectTotalPages = ({people}: RootState) => people.people?.total_pages;
export const selectTotalResults = ({people}: RootState) => people.people?.total_results;