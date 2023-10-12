import { RatingWrapper } from "./Rating.styles.ts";
import { StarIconWrapper } from "./Rating.styles.ts";

interface RatingProps {
  rating: string;
}
export const Rating = ({ rating }: RatingProps) => {
  return (
    <RatingWrapper variant="body1">
      <StarIconWrapper />
      {rating}
    </RatingWrapper>
  );
};
