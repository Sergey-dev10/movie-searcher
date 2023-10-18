import { takeEvery, put, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { fetchDiscoverMovies } from "../../core/api/discover/api.ts";
import { FETCH_DISCOVER_MOVIES } from "../../constants/actionType.ts";
import { fetchDiscoveredMoviesSuccess } from "./slice.ts";

interface DiscoverWorkerProps {
  payload: {
    page: number;
    year?: number;
    genre?: number;
    sortBy?: string;
  };
}
function* discoverWorker({
  payload: { page, year, genre, sortBy },
}: DiscoverWorkerProps): SagaIterator {
  try {
    const discovered = yield call(
      fetchDiscoverMovies,
      page,
      year,
      genre,
      sortBy,
    );
    yield put(fetchDiscoveredMoviesSuccess(discovered));
  } catch (error) {
    console.error(error);
  }
}

export function* discoverWatcher() {
  // @ts-ignore
  yield takeEvery(FETCH_DISCOVER_MOVIES, discoverWorker);
}
