import React from "react";
import "./SideBar.scss";
import closeIcon from "../../assets/icons/close.svg";
import { NavLink } from "react-router-dom";

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

          <ul>
            {jars.map((jar) => {
              return (
                <li className="sidebar__jar-link">
                  <NavLink>{jar.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="sidebar__social">
          <NavLink>
            <h4 className="sidebar__title">Friends </h4>
          </NavLink>
          <NavLink>
            <h4 className="sidebar__title">Suggestions</h4>
          </NavLink>
        </div>

        <div className="sidebar__functional">
          <NavLink>
            <h4 className="sidebar__title">Picker Tool</h4>
          </NavLink>
          <NavLink>
            <h4 className="sidebar__title">Find Movies</h4>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideBar;
