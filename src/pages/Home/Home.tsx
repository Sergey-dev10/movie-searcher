import { useAppDispatch } from "../../hooks";
import {
  fetchUpcomingMovies,
  fetchTopRatedMovies,
} from "../../modules/movie/actions.ts";
import { useEffect } from "react";
export const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTopRatedMovies());
  }, []);

  return (
    <>
      <h2>Upcoming Movies</h2>
      <h2>Top Rated Movies</h2>
    </>
  );
};
