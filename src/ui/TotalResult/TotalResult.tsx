import { useAppSelector } from "../../hooks";
import { selectSearchQuery } from "../../modules/search/selectors";
import { formatNumberWithCommas } from "../../utils/formatNumberWithCommas.ts";
import { TotalResultsWrapper } from "./TotalResults.styles.ts";

interface TotalResultProps {
  totalResults: number;
}
export const TotalResult = ({ totalResults }: TotalResultProps) => {
  const query = useAppSelector(selectSearchQuery);
  return (
    <TotalResultsWrapper>
      {formatNumberWithCommas(totalResults)} total result with keyword: {query}
    </TotalResultsWrapper>
  );
};
