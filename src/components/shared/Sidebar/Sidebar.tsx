import { Bookmark, Home, Search, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "../../ui/logo/Logo";

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (prev: boolean) => void;
};

export function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const [activeNavItem, setActiveNavItem] = useState("home");

  return (
    <aside className={isSidebarOpen ? "sidebar sidebar-active" : "sidebar"}>
      <div
        className="sidebar-close-button"
        onClick={() => setIsSidebarOpen(false)}
      >
        <X />
      </div>
      <Logo className="sidebar-logo" />
      <div className="nav-items">
        <div
          className={
            activeNavItem === "home" ? "nav-item active-nav-item" : "nav-item"
          }
          onClick={() => {
            setActiveNavItem("home");
          }}
        >
          <Home />
          <span>Home</span>
        </div>
        <div
          className={
            activeNavItem === "search" ? "nav-item active-nav-item" : "nav-item"
          }
          onClick={() => {
            setActiveNavItem("search");
          }}
        >
          <Search />
          <span>Search</span>
        </div>
        <div
          className={
            activeNavItem === "saved-jobs"
              ? "nav-item active-nav-item"
              : "nav-item"
          }
          onClick={() => {
            setActiveNavItem("saved-jobs");
          }}
        >
          <Bookmark />
          <span>Saved Jobs</span>
        </div>
      </div>
    </aside>
  );
}
