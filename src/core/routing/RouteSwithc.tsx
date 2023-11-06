import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { Home } from "../../pages/Home";
import { Trending } from "../../pages/Trending";
import { Discover } from "../../pages/Discover";
import { Shows } from "../../pages/Shows";
import { PeoplePopular } from "../../pages/PeoplePopular";
import { Genres } from "../../pages/Genres";
import { Favorites } from "../../pages/Favorites";
import { TopRated } from "../../pages/TopRated";
import { Upcoming } from "../../pages/Upcoming";
import {SearchResult} from "../../pages/SearchResult";
import {Movie} from "../../pages/Movie";
import {Show} from "../../pages/Show";
import {Genre} from "../../pages/Genre/";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "discover",
        element: <Discover />,
      },
      {
        path: "shows",
        element: <Shows />,
      },
      {
        path: "people",
        element: <PeoplePopular />,
      },
      {
        path: "genres",
        element: <Genres />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
      },
      {
        path: "search/:query",
        element: <SearchResult />,
      },
      {
        path: "movie/:id",
        element: <Movie />,
      },
      {
        path: "show/:id",
        element: <Show />,
      },
      {
        path: "genres/:name/:id",
        element: <Genre />,
      },
    ],
  },
]);
