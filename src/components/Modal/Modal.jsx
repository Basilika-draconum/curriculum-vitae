import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import s from "./modal.module.scss";

const Modal = ({ closeModal}) => {
  return ReactDOM.createPortal(
      <div className={s.wrapper}>
        <div className={s.modal} onClick={e=>e.stopPropagation()}>
          <nav className={s.navigation_list}>
            <NavLink className={s.navigation_item} to="/" onClick={closeModal} >
              about me
            </NavLink>
          <NavLink className={s.navigation_item} to="/resume" onClick={closeModal}>
              resume
            </NavLink>
            <NavLink className={s.navigation_item} to="/projects" onClick={closeModal}>
              projects
            </NavLink>
            <NavLink className={s.navigation_item} to="/contact" onClick={closeModal}>
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
