import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Grid from "@mui/material/Grid";
import { fetchGenres } from "../../modules/genre/actions.ts";
import { selectGenres } from "../../modules/genre/selectors.ts";
import { GenreCard } from "../../ui/GenreCard";
import {Genre} from "../../modules/movie/types.ts";
import { nanoid } from "@reduxjs/toolkit";

export const Genres = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);
  return (
    <div>
      <h1>Genres</h1>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        {genres
          ? genres.map((genre: Genre) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: "flex", justifyContent: "center" }}
                key={nanoid()}
              >
                <GenreCard {...genre} />
              </Grid>
            ))
          : ""}
      </Grid>
    </div>
  );
};
