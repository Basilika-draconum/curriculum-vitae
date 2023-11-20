import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import menuItems from "../../data/navigation.json"
import s from "./modal.module.scss";

const Modal = ({ closeModal }) => {

  return ReactDOM.createPortal(
    <div className={s.wrapper}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <nav className={s.navigation_list}>
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              className={s.navigation_item}
              to={item.href}
              onClick={closeModal}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
