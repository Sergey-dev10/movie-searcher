import {Outlet} from "react-router";
import { Header } from "../ui/Header";
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
