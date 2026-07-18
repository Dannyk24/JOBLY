import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar/Navbar";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
