import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchPeople } from "../../modules/people/actions";
import { People } from "../../ui/People";
import { Pagination } from "../../ui/Pagination";
import {
  selectPeople,
  selectTotalPages,
  selectTotalResults,
} from "../../modules/people/selectors.ts";
export const PeoplePopular = () => {
  const dispatch = useAppDispatch();
  const totalPages = useAppSelector(selectTotalPages);
  const totalResults = useAppSelector(selectTotalResults);

  const people = useAppSelector(selectPeople);

  const [page, setPage] = useState(1);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(fetchPeople(page));
  }, [page]);

  return (
    <div>
      <h1>Popular People</h1>
      {totalResults ? <span>{totalResults} Movies</span> : ""}
      <People people={people} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onHandleChangePage={handleChangePage}
      />
    </div>
  );
};
