import { useEffect } from "react";
import { useMatch } from "react-router";
import { Box, Button } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchShow } from "../../modules/show/actions.ts";
import { selectShow } from "../../modules/show/selectors.ts";
import {
  Poster,
  MovieDetails,
  MovieTitle,
  MovieOverview,
  MovieRating,
  Genres,
} from "../Movie/Movie.styles.ts";
import { POSTER_IMG_URL } from "../../constants/baseURL.ts";
import { releaseDateToYear } from "../../utils/releaseDateToYear.ts";
import { ratingToFloat } from "../../utils/ratingToFloat.ts";

export const Show = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectShow);
  const match = useMatch("/show/:id");
  const title = show ? show.title : "";
  const posterPath = show ? show.poster_path : "";
  const overview = show ? show.overview : "";
  const voteAverage = show ? show.vote_average : 0;
  const releaseDate = show ? releaseDateToYear(show.first_air_date) : "";
  const genres = show ? show.genres : [];

  useEffect(() => {
    dispatch(fetchShow(Number(match?.params.id)));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        "@media (max-width: 600px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <Poster src={`${POSTER_IMG_URL}/${posterPath}`} />
      <MovieDetails>
        <MovieTitle>{`${title} (${releaseDate})`}</MovieTitle>
        <MovieRating>
          <StarRateIcon sx={{ color: "yellow" }} />
          {`${ratingToFloat(voteAverage)} Rating`}
        </MovieRating>
        <Genres>
          {genres.map((genre, index) => (
            <span key={index}>
              {genre.name}
              {index < genres.length - 1 ? " / " : ""}
            </span>
          ))}
        </Genres>
        <h4>Overview</h4>
        <MovieOverview>{overview}</MovieOverview>
        <Button variant="outlined">Favorite</Button>
      </MovieDetails>
    </Box>
  );
};
