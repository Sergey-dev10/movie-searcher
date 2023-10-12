import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import {
  fetchUpcomingMovies,
  fetchTopRatedMovies,
} from "../../modules/movie/actions.ts";
import { UpcomingSection } from "./components/UpcomingSection";
import {TopRatedSection} from "./components/TopRatedSection";

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTopRatedMovies());
  }, []);

  return (
    <>
      <UpcomingSection />
      <TopRatedSection />
    </>
  );
};
