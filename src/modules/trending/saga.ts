import { takeEvery, call, put } from 'redux-saga/effects';
import {SagaIterator} from "redux-saga";
import {fetchTrendingMovies} from "../../core/api/trending/api.ts";
import {fetchTrendingMoviesSuccess} from "./slice.ts";
import {FETCH_TRENDING_MOVIES} from "../../constants/actionType.ts";

function* trendingWorker({payload}: {payload: number}): SagaIterator {
  try {
    const trendingMovies = yield call(fetchTrendingMovies, payload);
    yield put(fetchTrendingMoviesSuccess(trendingMovies));
  } catch (error) {
      console.log(error);
  }
}

export function* trendingWatcher() {
  // @ts-ignore
  yield takeEvery(FETCH_TRENDING_MOVIES, trendingWorker);
}