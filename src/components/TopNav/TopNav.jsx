import "./TopNav.scss";
import { NavLink } from "react-router-dom";
import SearchMovieBox from "../SearchMovieBox/SearchMovieBox";
import logo from '../../assets/logo/logo.png'
import CurrentUserAvatar from "../CurrentUserAvatar/CurrentUserAvatar";

function TopNav({ setShowSubForm }) {

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          <img src={logo} alt="jar with film reel logo" className="navbar__logo-img" />
          <p className="navbar__logo-text">MovieJar</p>
        </div>
        <SearchMovieBox modifier='--mobile' />
        <div className="navbar__links">
          <NavLink className="navbar__link" to="/jar">
            Jars
          </NavLink>
          <div onClick={() => setShowSubForm(true)}>
            <NavLink className="navbar__link" to="/picker" >
              Movie Picker
            </NavLink>
          </div>
        </div>
      </div>

      <div className="navbar__menu">
        <SearchMovieBox modifier='--tablet' />
        <CurrentUserAvatar isMenu={true} />
      </div>
    </nav>
  );
}

export default TopNav;
