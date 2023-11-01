import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import s from "./modal.module.scss";

const Modal = ({ closeModal }) => {
  const menuItems = [
    { to: "/", label: "about me" },
    { to: "/resume", label: "resume" },
    { to: "/projects", label: "projects" },
    { to: "/contact", label: "contact" },
  ];
  return ReactDOM.createPortal(
    <div className={s.wrapper}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <nav className={s.navigation_list}>
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              className={s.navigation_item}
              to={item.to}
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
