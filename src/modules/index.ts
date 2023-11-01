import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import movieReducer from "./movie/slice";
import searchReducer from "./search/slice";
import { movieWatcher } from "./movie/saga";
import { searchWatcher } from "./search/saga";
import peopleReducer from "./people/slice";
import { peopleWatcher } from "./people/saga";
import trendingReducer from "./trending/slice";
import { trendingWatcher } from "./trending/saga";
import discoverReducer from "./discover/slice";
import { discoverWatcher } from "./discover/saga";
import showReducer from "./show/slice";
import { showWatcher } from "./show/saga.ts";
import genreReducer from "./genre/slice";
import { genreWatcher } from "./genre/saga.ts";
import favoriteReducer from "./favorite/slice";
export const rootReducer = combineReducers({
  movie: movieReducer,
  search: searchReducer,
  people: peopleReducer,
  trending: trendingReducer,
  discover: discoverReducer,
  show: showReducer,
  genre: genreReducer,
  favorite: favoriteReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    movieWatcher(),
    searchWatcher(),
    peopleWatcher(),
    trendingWatcher(),
    discoverWatcher(),
    showWatcher(),
    genreWatcher(),
  ]);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
