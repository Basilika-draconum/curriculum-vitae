import React from "react";
import ReactDOM from "react-dom";
import s from "./modal.module.scss";
import { NavLink } from "react-router-dom";

const Modal = () => {
  return ReactDOM.createPortal(
      <div className={s.wrapper}>
        <div className={s.modal} onClick={e=>e.stopPropagation()}>
          <nav className={s.navigation_list}>
            <NavLink className={s.navigation_item} to="/" >
              about me
            </NavLink>
            <NavLink className={s.navigation_item} to="/resume">
              resume
            </NavLink>
            <NavLink className={s.navigation_item} to="/projects">
              projects
            </NavLink>
            <NavLink className={s.navigation_item} to="/contact">
              contact
            </NavLink>
          </nav>
        </div>
      </div>
    ,
    document.getElementById("portal")
  );
};

export default Modal;
