import { takeEvery, put, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { fetchShows, fetchShow } from "../../core/api/show/api.ts";
import {
  FETCH_DISCOVER_SHOWS,
  FETCH_SHOW,
} from "../../constants/actionType.ts";
import { fetchShowsSuccess, fetchShowSuccess } from "./slice.ts";
interface ShowWorkerProps {
  type: string;
  payload: {
        page: number;
        year?: number;
        genre?: number;
        sortBy?: string;
      }
    | number;
}
function* showWorker({ type, payload }: ShowWorkerProps): SagaIterator {
  switch (type) {
    case FETCH_DISCOVER_SHOWS:
      try {
        if (typeof payload !== "number") {
          const discovered = yield call(
            fetchShows,
            payload.page,
            payload.year,
            payload.genre,
            payload.sortBy,
          );
          yield put(fetchShowsSuccess(discovered));
        }
      } catch (error) {
        console.error(error);
      }
      break;
    case FETCH_SHOW:
      try {
        if (typeof payload === "number") {
          const show = yield call(fetchShow, payload);
          yield put(fetchShowSuccess(show));
        }
      } catch (error) {
        console.error(error);
      }
      break;
  }
}

export function* showWatcher() {
  // @ts-ignore
  yield takeEvery([FETCH_DISCOVER_SHOWS, FETCH_SHOW], showWorker);
}
