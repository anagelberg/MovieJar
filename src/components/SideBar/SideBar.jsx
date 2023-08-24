import React from "react";
import "./SideBar.scss";
import closeIcon from "../../assets/icons/close.svg";

function SideBar({ isOpen, setIsOpen }) {
  return (
    <>
      <div className={isOpen ? "sidebar" : "sidebar sidebar--closed"}>
        <img
          className="sidebar__close"
          src={closeIcon}
          onClick={() => setIsOpen(false)}
        ></img>
        <p>Sidebar test</p>
        <p>Sidebar test</p>
        <p>Sidebar test</p>
        <p>Sidebar test</p>
        <p>Sidebar test</p>
        <p>Sidebar test</p>
        <p>Sidebar test</p>
        <p>Sidebar test</p>
      </div>
    </>
  );
}

export default SideBar;
