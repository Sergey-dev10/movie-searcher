import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Movie } from "../../modules/movie/types.ts";
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
import {ratingToFloat} from "../../utils/ratingToFloat.ts";

export const MovieCard = ({
  title,
  poster_path,
  release_date,
  vote_average,
}: Movie) => {
  return (
    <CardWrapper>
      <CardActionArea>
        <Rating rating={ratingToFloat(vote_average)} />
        <Poster component="img" image={`${MOVIE_POSTER_URL}${poster_path}`} />
        <CardContent>
          <Title gutterBottom variant="h4" component="div">
            {title}
          </Title>
          <Info>
            <ReleaseDate component="span">{release_date}</ReleaseDate>
            <FavoriteIcon />
          </Info>
        </CardContent>
      </CardActionArea>
    </CardWrapper>
  );
};
