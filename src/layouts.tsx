import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar/Navbar";
import { Footer } from "./components/shared/Footer/Footer";

export function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export function MainLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
