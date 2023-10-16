import Grid from "@mui/material/Grid";
import { nanoid } from "@reduxjs/toolkit";
import { Person } from "../../modules/people/types.ts";
import { PersonCard } from "../PersonCard/PersonCard.tsx";

interface PeopleProps {
  people: Person[] | undefined;
}
export const People = ({ people }: PeopleProps) => {
  return (
    <Grid container spacing={2} sx={{ mt: 5 }}>
      {people
        ? people.slice(0, 10).map((person: Person) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={12 / 5}
              sx={{ display: "flex", justifyContent: "center" }}
              key={nanoid()}
            >
              <PersonCard {...person} />
            </Grid>
          ))
        : ""}
    </Grid>
  );
};
