import {SagaIterator} from "redux-saga";
import {put, call, takeEvery} from "redux-saga/effects";
import {searchMovies, searchShows, searchPeople} from "../../core/api/search/api.ts";
import {searchMoviesSuccess} from "./slice.ts";
import {SEARCH_MOVIES} from "../../constants/actionType.ts";
interface searchWorkerProps {
    payload: {
        query: string;
        page: number;
    };
}
function* searchWorker({payload: {query, page}}: searchWorkerProps): SagaIterator {
    try {
        const movies = yield call(searchMovies, query, page);
        const shows = yield call(searchShows, query, page);
        const people = yield call(searchPeople, query, page);
        yield put(searchMoviesSuccess({query, movies, shows, people}));
    } catch (error) {
        console.log(error);
    }
}

export function* searchWatcher() {
    // @ts-ignore
    yield takeEvery(SEARCH_MOVIES, searchWorker);
}