import {createAction} from "@reduxjs/toolkit";
import {FETCH_PEOPLE} from "../../constants/actionType.ts";

export const fetchPeople = createAction(FETCH_PEOPLE, (page = 1) => ({
    payload: page
}));