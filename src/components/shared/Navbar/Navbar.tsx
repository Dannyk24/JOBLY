import { Bookmark, Home, Menu, Moon, Search, X } from "lucide-react";
import "./Navbar.css";
import { useState } from "react";
import { Logo } from "../../ui/logo/Logo";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header>
      <div className="header-left">
        <div
          className="header-icon"
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          <Menu />
        </div>
        <Logo className="header-logo" />
      </div>
      <div className="header-right">
        <div className="header-search-bar-container">
          <Search />
          <input
            type="search"
            placeholder="Search jobs from around the globe......"
          />
          <button className="cta primary-cta header-search-cta">Search</button>
        </div>
        <div className="header-icons">
          <div className="header-icon">
            <Moon />
          </div>
          <div className="header-icon">
            <Bookmark />
          </div>
        </div>
      </div>
      <aside className={isSidebarOpen ? "sidebar sidebar-active" : "sidebar"}>
        <div
          className="sidebar-close-button"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X />
        </div>
        <Logo className="sidebar-logo" />
        <div className="nav-items">
          <div className="nav-item active-nav-item">
            <Home />
            <span>Home</span>
          </div>
          <div className="nav-item">
            <Search />
            <span>Search</span>
          </div>
          <div className="nav-item">
            <Bookmark />
            <span>Saved Jobs</span>
          </div>
        </div>
      </aside>
      <div
        className={isSidebarOpen ? "overlay overlay-active" : "overlay"}
        onClick={() => {
          setIsSidebarOpen(false);
        }}
      ></div>
    </header>
  );
}

export default Navbar;
