import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {FETCH_GENRES, FETCH_MOVIES_BY_GENRE} from "../../constants/actionType.ts";
import {fetchGenres, fetchMoviesByGenre} from "../../core/api/genre/api.ts";
import {fetchGenresSuccess, fetchMoviesByGenreSuccess} from "./slice.ts";

interface GenreWorkerProps {
    type: string;
    payload: {
        page: number;
        genre: number;
    };
}
function* genreWorker({type, payload}: GenreWorkerProps): SagaIterator {
    switch(type) {
        case FETCH_GENRES:
            try {
                const genres = yield call(fetchGenres);
                yield put(fetchGenresSuccess(genres));
            } catch (error) {
                console.error(error);
            }
        break;
        case FETCH_MOVIES_BY_GENRE:
            try {
                const movies = yield call(fetchMoviesByGenre, payload.page, payload.genre);
                yield put(fetchMoviesByGenreSuccess(movies));
            } catch (error) {
                console.error(error);
            }
    }

}

export function* genreWatcher() {
    yield takeEvery([FETCH_GENRES, FETCH_MOVIES_BY_GENRE], genreWorker);
}