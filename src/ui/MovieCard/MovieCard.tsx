import { useAppDispatch, useAppSelector } from "../../hooks";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import {
  CardWrapper,
  Poster,
  Title,
  Info,
  ReleaseDate,
} from "./MovieCard.styles.ts";
import { MOVIE_POSTER_URL } from "../../constants/baseURL.ts";
import { Rating } from "./components/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ratingToFloat } from "../../utils/ratingToFloat.ts";
import { releaseDateToYear } from "../../utils/releaseDateToYear.ts";
import { addFavorite, removeFavorite } from "../../modules/favorite/slice.ts";
import { FavoriteItem } from "../../modules/favorite/types.ts";
import { selectFavorites } from "../../modules/favorite/selectors.ts";

interface MovieCardProps {
  id: number;
  name?: string;
  title?: string;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
}
export const MovieCard = ({
  id,
  name,
  title,
  poster_path,
  release_date,
  first_air_date,
  vote_average,
}: MovieCardProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const isFavorite = favorites.find((item) => item.id === id);

  const handleFavoriteClick = () => {
    console.log("handleFavoriteClick");
    const favoriteItem: FavoriteItem = {
      id,
      name: name,
      title: title,
      poster_path,
      release_date: release_date,
      first_air_date: first_air_date,
      vote_average,
    };

    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(favoriteItem));
    }
  };

  return (
    <CardWrapper>
      <CardActionArea
        component={Link}
        to={release_date ? `/movie/${id}` : `/show/${id}`}
      >
        <Rating rating={ratingToFloat(vote_average)} />
        <Poster component="img" image={`${MOVIE_POSTER_URL}${poster_path}`} />
      </CardActionArea>

      <CardContent>
        <Title gutterBottom variant="h4" component="div">
          {title ? title : name}
        </Title>
        <Info>
          <ReleaseDate component="span">
            {release_date
              ? releaseDateToYear(release_date)
              : first_air_date
              ? releaseDateToYear(first_air_date)
              : ""}
          </ReleaseDate>
          <FavoriteIcon
            sx={{
              cursor: "pointer",
              color: isFavorite ? "#ff2e4f" : "#5b6166",
            }}
            onClick={handleFavoriteClick}
          />
        </Info>
      </CardContent>
    </CardWrapper>
  );
};
