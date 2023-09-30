import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { Home } from "../../pages/Home";
import { Trending } from "../../pages/Trending";
import { Discover } from "../../pages/Discover";
import { TVShows } from "../../pages/TVShows";
import { People } from "../../pages/People";
import { Genres } from "../../pages/Genres";
import { Favorites } from "../../pages/Favorites";

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
        path: "tvshows",
        element: <TVShows />,
      },
      {
        path: "people",
        element: <People />,
      },
      {
        path: "genres",
        element: <Genres />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);
