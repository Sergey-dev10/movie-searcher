import { put, call, takeEvery } from "redux-saga/effects";
import {
  fetchUpcomingMoviesSuccess,
  fetchTopRatedMoviesSuccess,
} from "./slice.ts";
import {
  FETCH_UPCOMING_MOVIES,
  FETCH_TOP_RATED_MOVIES,
} from "../../constants/actionType.ts";
import { getUpcomingMovies, getTopRatedMovies } from "../../core/api/movie";
import { SagaIterator } from "redux-saga";

interface movieWorkerProps {
  type: string;
  payload: {
    page: number;
  };
}
function* movieWorker({
  type,
  payload: { page },
}: movieWorkerProps): SagaIterator {
  switch (type) {
    case FETCH_UPCOMING_MOVIES:
      try {
        const upcomingMovies = yield call(getUpcomingMovies, page);
        console.log(upcomingMovies);
        yield put(fetchUpcomingMoviesSuccess(upcomingMovies.results));
      } catch (error) {
        console.error(error);
      }
      break;
    case FETCH_TOP_RATED_MOVIES:
      try {
        const topRatedMovies = yield call(getTopRatedMovies, page);
        yield put(fetchTopRatedMoviesSuccess(topRatedMovies.results));
      } catch (error) {
        console.error(error);
      }
      break;
  }
}

export function* movieWatcher() {
  yield takeEvery([FETCH_UPCOMING_MOVIES, FETCH_TOP_RATED_MOVIES], movieWorker);
}
