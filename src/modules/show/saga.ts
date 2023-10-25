import { takeEvery, put, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { fetchShows } from "../../core/api/show/api.ts";
import { FETCH_DISCOVER_SHOWS } from "../../constants/actionType.ts";
import { fetchShowsSuccess } from "./slice.ts";
interface ShowWorkerProps {
  payload: {
    page: number;
    year?: number;
    genre?: number;
    sortBy?: string;
  };
}
function* showWorker({
  payload: { page, year, genre, sortBy },
}: ShowWorkerProps): SagaIterator {
  try {
    const discovered = yield call(fetchShows, page, year, genre, sortBy);
    console.log(genre);
    yield put(fetchShowsSuccess(discovered));
  } catch (error) {
    console.error(error);
  }
}

export function* showWatcher() {
  // @ts-ignore
  yield takeEvery(FETCH_DISCOVER_SHOWS, showWorker);
}
