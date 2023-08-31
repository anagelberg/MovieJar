import React from "react";
import "./SideBar.scss";
import closeIcon from "../../assets/icons/close.svg";
import { NavLink } from "react-router-dom";
import AddMovieForm from "../AddMovieForm/AddMovieForm";

function SideBar({ isOpen, setIsOpen, jars }) {
  return (
    <>
      <div className={isOpen ? "sidebar" : "sidebar sidebar--closed"}>
        <img
          className="sidebar__close"
          src={closeIcon}
          onClick={() => setIsOpen(false)}
        ></img>
        {/* Movie Jar List  */}
        <div className="sidebar__jars">
          <h4 className="sidebar__title">Your Movie Jars</h4>

          {jars?.map((jar) => {
            return (
              <NavLink className="sidebar__jar-link" to={`/jar/${jar.jarId}`}>
                {jar.name}
              </NavLink>
            );
          })}
        </div>

        {/* <div className="sidebar__social">
          <NavLink className="sidebar__link" to="/friends">
            <h4 className="sidebar__title">Friends </h4>
          </NavLink>
          <NavLink className="sidebar__link" to="/suggestions">
            <h4 className="sidebar__title">Suggestions</h4>
          </NavLink>
        </div> */}

        <div className="sidebar__functional">
          {/* <NavLink className="sidebar__link" to="/picker">
            <h4 className="sidebar__title">Picker Tool</h4>
          </NavLink> */}
          <NavLink className="sidebar__link" to="/search" isActive={(match, location) => {
            return location.pathname.includes("/search")
          }}
            activeClassName="active">
            <h4 className="sidebar__title">Find Movies</h4>
          </NavLink>

        </div>
      </div>
    </>
  );
}

export default SideBar;
