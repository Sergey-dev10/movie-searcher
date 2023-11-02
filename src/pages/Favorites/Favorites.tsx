import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Box from "@mui/material/Box";
import { Movies } from "../../ui/Movies";
import { Pagination } from "../../ui/Pagination";
import {TotalResult} from "../../ui/TotalResult/TotalResult.tsx";
import {selectFavorites} from "../../modules/favorite/selectors.ts";
export const Favorites = () => {
    const favorites = useAppSelector(selectFavorites);
    const totalResults = favorites ? favorites.length : 0;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalResults / itemsPerPage);
    const [page, setPage] = useState(1);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedFavorites = favorites.slice(startIndex, endIndex);

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number,
    ) => {
        setPage(value);
    };

    return (
        <Box sx={{ mb: 10, flexGrow: 1 }}>
            <h2>My Favorite Movies</h2>
            <TotalResult totalResults={totalResults} type="movie"/>
            <Movies movies={displayedFavorites} />
            <Pagination
                page={page}
                totalPages={totalPages}
                onHandleChangePage={handleChangePage}
            />
        </Box>
    );
};
