import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
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

interface MovieCardProps {
  title: string;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
}
export const MovieCard = ({
  title,
  poster_path,
  release_date,
  first_air_date,
  vote_average,
}: MovieCardProps) => {
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
            <ReleaseDate component="span">
              {release_date ? release_date : first_air_date}
            </ReleaseDate>
            <FavoriteIcon />
          </Info>
        </CardContent>
      </CardActionArea>
    </CardWrapper>
  );
};
