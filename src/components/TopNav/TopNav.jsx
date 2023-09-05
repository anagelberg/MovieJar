import "./TopNav.scss";
import { NavLink } from "react-router-dom";
import SearchMovieBox from "../SearchMovieBox/SearchMovieBox";

function TopNav({ setShowSubForm }) {

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1 className="navbar__logo">MovieJar</h1>
        <SearchMovieBox modifier='--mobile' />
        <div className="navbar__links">
          <NavLink className="navbar__link" to="/jar">
            Jars
          </NavLink>
          <NavLink className="navbar__link" to="/picker" onClick={() => setShowSubForm(true)}>
            Movie Picker
          </NavLink>
        </div>
      </div>

      <div className="navbar__menu">
        <SearchMovieBox modifier='--tablet' />
        <div className="navbar__avatar"></div>
      </div>
    </nav>
  );
}

export default TopNav;
