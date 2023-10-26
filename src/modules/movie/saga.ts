import { put, call, takeEvery } from "redux-saga/effects";
import {
  fetchUpcomingMoviesSuccess,
  fetchTopRatedMoviesSuccess,
  fetchMovieSuccess,
} from "./slice.ts";
import {
  FETCH_UPCOMING_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_MOVIE,
} from "../../constants/actionType.ts";
import {
  getUpcomingMovies,
  getTopRatedMovies,
  getMovie,
} from "../../core/api/movie/api.ts";
import { SagaIterator } from "redux-saga";

interface movieWorkerProps {
  type: string;
  payload: number;
}
function* movieWorker({ type, payload }: movieWorkerProps): SagaIterator {
  switch (type) {
    case FETCH_UPCOMING_MOVIES:
      try {
        const upcomingMovies = yield call(getUpcomingMovies, payload);
        yield put(fetchUpcomingMoviesSuccess(upcomingMovies));
      } catch (error) {
        console.error(error);
      }
      break;
    case FETCH_TOP_RATED_MOVIES:
      try {
        const topRatedMovies = yield call(getTopRatedMovies, payload);
        yield put(fetchTopRatedMoviesSuccess(topRatedMovies));
      } catch (error) {
        console.error(error);
      }
      break;
      case FETCH_MOVIE:
        try {
          const movie = yield call(getMovie, payload);
          yield put(fetchMovieSuccess(movie));
        } catch (error) {
            console.error(error);
        }
      break;
  }
}

export function* movieWatcher() {
  yield takeEvery([FETCH_UPCOMING_MOVIES, FETCH_TOP_RATED_MOVIES, FETCH_MOVIE], movieWorker);
}
