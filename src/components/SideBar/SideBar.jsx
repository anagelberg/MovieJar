import React from "react";
import "./SideBar.scss";
import closeIcon from "../../assets/icons/close.svg";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

function SideBar({ isOpen, setIsOpen, jars, currentUser, resetJars }) {
  const [addingJar, setAddingJar] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (addingJar && inputRef.current) {
      inputRef.current.focus();
    }
  }, [addingJar]);

  const addJar = (e) => {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      axios.post(`${process.env.REACT_APP_BASE_URL}/jar`, {
        name: e.target.value,
        creatorId: currentUser
      }).then(() => {
        resetJars();
      }).catch(err => {
        console.log(err)
      })
      setAddingJar(false);
    }
  }

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
          <div className="sidebar__jar-link sidebar__jar-link--text" onClick={() => setAddingJar(true)}>
            <p className={addingJar
              ? "sidebar__add-new-text sidebar__add-new-text--hidden"
              : "sidebar__add-new-text"} >
              + Add New Jar
            </p>
            <input ref={inputRef}
              className={addingJar
                ? "sidebar__add-new-input"
                : "sidebar__add-new-input  sidebar__add-new-input--hidden"}
              onBlur={() => setAddingJar(false)}
              onKeyDown={(e) => { addJar(e) }} >
            </input>
          </div>
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
