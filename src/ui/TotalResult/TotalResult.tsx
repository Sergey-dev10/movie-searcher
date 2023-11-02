import { useAppSelector } from "../../hooks";
import { selectSearchQuery } from "../../modules/search/selectors";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas.ts";
import { TotalResultsWrapper } from "./TotalResults.styles.ts";

interface TotalResultProps {
  totalResults: number;
  type: string;
}
export const TotalResult = ({ totalResults, type }: TotalResultProps) => {
  const query = useAppSelector(selectSearchQuery);
  return (
    <TotalResultsWrapper>
      {type === "search"
        ? `${formatNumberWithCommas(
            totalResults,
          )} total result with keyword: ${query}`
        : type === "movie"
        ? `${formatNumberWithCommas(totalResults)} Movies`
        : type === "people"
        ? `${formatNumberWithCommas(totalResults)} People`
        : `${formatNumberWithCommas(totalResults)} TV Shows`}
    </TotalResultsWrapper>
  );
};
