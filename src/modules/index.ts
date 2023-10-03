import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import movieReducer from "./movie/slice";
import { movieWatcher } from "./movie/saga";

export const rootReducer = combineReducers({
  movie: movieReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([movieWatcher()]);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
