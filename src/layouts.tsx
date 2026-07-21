import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar/Navbar";
import { Footer } from "./components/shared/Footer/Footer";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
