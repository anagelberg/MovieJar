import React from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ReactComponent as DelIcon } from '../../assets/icons/delete.svg'
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import DeleteModal from "../DeleteModal/DeleteModal";
import AddJarModal from "../AddJarModal/AddJarModal";
import ClosingX from "../ClosingX/ClosingX";
import { useEffect } from "react";
import { debounce } from 'lodash';

function SideBar({ isOpen, setIsOpen, jars, currentUser, resetJars, setShowSubForm, mobileClose }) {

  const [showDelModal, setShowDelModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [delJar, setDelJar] = useState(null);


  const handleDeleteJar = () => {
    console.log("handle Delete Jar User", currentUser);
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/jar/${delJar.jarId}/${currentUser.id}`)
      .then(() => {
        resetJars();
      }).catch(err => {
        console.log("Error deleting", err);
      })
  }


  // Adjust default sidebar state based on window width
  useEffect(() => {
    const handleResize = debounce(() => {
      setIsOpen(window.innerWidth >= 768);
    }, 250);

    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, []);


  return (
    <>
      <div className={isOpen ? "sidebar" : "sidebar sidebar--closed"}>
        <ClosingX
          closeHandler={() => { setIsOpen(false) }} modifier='--light' />

        {/* Movie Jar List  */}
        <section className="sidebar__jars">
          <h4 className="sidebar__title">Your Movie Jars</h4>

          {jars?.map((jar) => {
            return (
              <div className="sidebar__jar-container" key={jar.jarId} >
                <NavLink
                  className="sidebar__jar-link"
                  to={`/jar/${jar.jarId}`}
                  onClick={() => window.innerWidth <= 767 && setIsOpen(false)}
                >
                  <p className="sidebar__link-text">{jar.name}</p>
                </NavLink>
                <DelIcon className="sidebar__jar-del"
                  onClick={() => {
                    setShowDelModal(true)
                    setDelJar(jar)
                  }} />
              </div>
            );
          })}

          {/* Add New Jar Button and Form */}
          <div className="sidebar__jar-link sidebar__jar-link--text" onClick={() => setShowAddModal(true)}>
            <p className="sidebar__add-new-text">
              + Add New Jar
            </p>
          </div>

        </section>

        {/* /commented out for no functionality  */}
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
            <h4 className="sidebar__title">Picker Tool < ArrowRight className="sidebar__right-arrow" /></h4>
          </NavLink>
        </div>

      </div>

      <DeleteModal
        show={showDelModal}
        headText={`Delete your jar named '${delJar?.name}'? `}
        bodyText={`You won't be able to undo this action, but if other users are contributing to this jar, they won't lose it.`}
        closeHandler={() => {
          setShowDelModal(false);
        }}
        delAction={() => {
          handleDeleteJar();
          setShowDelModal(false);
        }}
      />

      <AddJarModal
        show={showAddModal}
        currentUser={currentUser}
        closeHandler={() => {
          setShowAddModal(false);
          resetJars();
        }}
      />


    </>
  );
}

export default SideBar;
