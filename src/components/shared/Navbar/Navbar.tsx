import { Bookmark, Cable, Menu, Moon, Search } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="header-left">
        <div className="header-icon">
          <Menu />
        </div>
        <div className="logo">
          <div className="logo-icon">
            <Cable />
          </div>
          <span className="logo-text">Jobly</span>
        </div>
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
    </header>
  );
}

export default Navbar;
