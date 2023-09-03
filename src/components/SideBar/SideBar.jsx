import React from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import { ReactComponent as DelIcon } from '../../assets/icons/delete.svg'
import DeleteModal from "../DeleteModal/DeleteModal";

function SideBar({ isOpen, setIsOpen, jars, currentUser, resetJars, setShowSubForm, mobileClose }) {
  const [addingJar, setAddingJar] = useState(false);
  const inputRef = useRef(null);
  const [showDelModal, setShowDelModal] = useState(false);
  const [delJar, setDelJar] = useState(null);

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
        inputRef.current.value = '';
      }).catch(err => {
        console.log(err)
      })
      setAddingJar(false);
    }
  }

  const handleDeleteJar = () => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/jar/${delJar.jarId}/${currentUser}`)
      .then(() => {
        resetJars();
      }).catch(err => {
        console.log("Error deleting", err);
      })
  }

  return (
    <>
      <div className={isOpen ? "sidebar" : "sidebar sidebar--closed"}>
        <div className="sidebar__close-container">
          <CloseIcon className="sidebar__close" onClick={() => setIsOpen(false)} />
        </div>
        {/* Movie Jar List  */}
        <div className="sidebar__jars">
          <h4 className="sidebar__title">Your Movie Jars</h4>

          {jars?.map((jar) => {
            return (
              <div className="sidebar__jar-container" key={jar.jarId} >
                <NavLink className="sidebar__jar-link"
                  to={`/jar/${jar.jarId}`}
                  onClick={() => mobileClose(setIsOpen)}
                >
                  {jar.name}
                </NavLink>
                <DelIcon className="sidebar__jar-del"
                  onClick={() => {
                    setShowDelModal(true)
                    setDelJar(jar)
                  }} />
              </div>
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

        <div className="sidebar__functional" onClick={() => { setShowSubForm(true) }}>
          <NavLink className="sidebar__link"
            to="/picker"
            onClick={() => {
              setShowSubForm(true)
              mobileClose(setIsOpen)
            }}>
            <h4 className="sidebar__title">Picker Tool</h4>
          </NavLink>
        </div>
      </div>

      <DeleteModal
        show={showDelModal}
        headText={`Delete your jar named ${delJar?.name}? `}
        bodyText={`You won't be able to undo this action, but if other users are contributing to this jar, they won't lose it.`}
        closeHandler={() => {
          setShowDelModal(false);
        }}
        delAction={() => {
          handleDeleteJar();
          setShowDelModal(false);
        }}
      />


    </>
  );
}

export default SideBar;
