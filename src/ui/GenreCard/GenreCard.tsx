import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import {getNameOfGenreImg} from "../../utils/getNameOfGenreImg.ts";
import {getNameOfGenreURL} from "../../utils/getNameOfGenreURL.ts";
import {GenreName} from "./Genre.styles.ts";
import {Link} from "react-router-dom";
interface GenreCardProps {
  id: number;
  name: string;
}
export const GenreCard = ({ id, name }: GenreCardProps) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`${getNameOfGenreURL(name)}/${id}`}>
        <CardMedia
          component="img"
          height="180"
          image={`${getNameOfGenreImg(name)}.jpg`}
          alt="green iguana"
        />
          <GenreName gutterBottom variant="h5" component="div">
            {name}
          </GenreName>
      </CardActionArea>
    </Card>
  );
};
