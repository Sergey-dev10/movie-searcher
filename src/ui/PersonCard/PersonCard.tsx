import { Person } from "../../modules/people/types.ts";
import {
  CardWrapper,
  Poster,
  Title,
} from "../MovieCard/MovieCard.styles.ts";
import { CardActionArea } from "@mui/material";
import { MOVIE_POSTER_URL } from "../../constants/baseURL.ts";
import CardContent from "@mui/material/CardContent";

export const PersonCard = ({ name, profile_path }: Person) => {
  return (
    <CardWrapper>
      <CardActionArea>
        <Poster component="img" image={`${MOVIE_POSTER_URL}${profile_path}`} />
        <CardContent>
          <Title gutterBottom variant="h4" component="div">
            {name}
          </Title>
        </CardContent>
      </CardActionArea>
    </CardWrapper>
  );
};
