import { useEffect } from "react";
import { useMatch } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Box, Button } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { fetchMovie } from "../../modules/movie/actions.ts";
import { selectMovie } from "../../modules/movie/selectors.ts";
import {
  Poster,
  MovieDetails,
  MovieTitle,
  MovieOverview,
  MovieRating,
  Genres,
} from "./Movie.styles.ts";
import { POSTER_IMG_URL } from "../../constants/baseURL.ts";
import { releaseDateToYear } from "../../utils/releaseDateToYear.ts";
import { ratingToFloat } from "../../utils/ratingToFloat.ts";
import { selectFavorites } from "../../modules/favorite/selectors.ts";
import { FavoriteItem } from "../../modules/favorite/types.ts";
import { addFavorite, removeFavorite } from "../../modules/favorite/slice.ts";

export const Movie = () => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectMovie);
  const match = useMatch("/movie-searcher/movie/:id");
  const id = movie ? movie.id : 0;
  const title = movie ? movie.title : "";
  const posterPath = movie ? movie.poster_path : "";
  const overview = movie ? movie.overview : "";
  const voteAverage = movie ? movie.vote_average : 0;
  const releaseDate = movie ? releaseDateToYear(movie.release_date) : "";
  const genres = movie ? movie.genres : [];
  const favorites = useAppSelector(selectFavorites);
  const isFavorite = favorites.find((item) => item.id === movie?.id);

  const handleFavoriteClick = () => {
    const favoriteItem: FavoriteItem = {
      id,
      title,
      poster_path: posterPath,
      release_date: releaseDate,
      vote_average: voteAverage,
    };

    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(favoriteItem));
    }
  };

  useEffect(() => {
    dispatch(fetchMovie(Number(match?.params.id)));
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
        <Button variant="outlined" onClick={handleFavoriteClick}>
          Favorite
        </Button>
      </MovieDetails>
    </Box>
  );
};
