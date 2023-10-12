import React from "react";
import Box from "@mui/material/Box";
import { PaginationWrapper } from "./Pagination.styles.ts";
interface PaginationProps {
  page?: number;
  totalPages?: number;
  onHandleChangePage?: (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => void;
}
export const Pagination = ({
  page,
  totalPages,
  onHandleChangePage,
}: PaginationProps) => {
  return (
    <>
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <span>
          {page} / {totalPages}
        </span>
      </Box>
      <PaginationWrapper
        count={totalPages}
        variant="outlined"
        shape="rounded"
        onChange={onHandleChangePage}
      />
    </>
  );
};
