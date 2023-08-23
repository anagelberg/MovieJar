import "./TopNav.scss";
import { NavLink } from "react-router-dom";

function TopNav() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1>Logo</h1>
        <input
          className="navbar__search navbar__search--mobile"
          placeholder="Find movies..."
        ></input>
        <div className="navbar__links">
          <NavLink className="navbar__link" to="/jar">
            Jars
          </NavLink>
          <NavLink className="navbar__link" to="/picker">
            Movie Picker
          </NavLink>
        </div>
      </div>

      <div className="navbar__menu">
        <input
          className="navbar__search navbar__search--tablet"
          placeholder="Find movies..."
        ></input>
        <div className="navbar__avatar"></div>
      </div>
    </nav>
  );
}

export default TopNav;
