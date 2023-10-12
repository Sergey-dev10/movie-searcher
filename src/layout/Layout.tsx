import { Outlet } from "react-router";
import { Header } from "../ui/Header";
import Container from "@mui/material/Container";
export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </main>
    </>
  );
};
