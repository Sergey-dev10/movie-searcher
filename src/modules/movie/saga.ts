import { put, call, takeEvery } from "redux-saga/effects";
import {
  fetchUpcomingMoviesSuccess,
  fetchTopRatedMoviesSuccess,
} from "./slice.ts";
import {
  FETCH_UPCOMING_MOVIES,
  FETCH_TOP_RATED_MOVIES,
} from "../../constants/actionType.ts";
import {
  getUpcomingMovies,
  getTopRatedMovies,
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
  }
}

export function* movieWatcher() {
  yield takeEvery([FETCH_UPCOMING_MOVIES, FETCH_TOP_RATED_MOVIES], movieWorker);
}
