import React, { useState } from "react";
import s from "./header.module.scss";
import burger from "../../images/icons/menu.svg";
// import sprite from "../../images/icons/common.svg";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <header className={s.section_header}>
      <div className={`container ${s.header}`}>
        <div className={s.info}>
          <h1 className={s.title}>Dubinenko Anzhelika</h1>
          <p className={s.position_slash}>/</p>
          <p className={s.position}> Frontend Developer</p>
        </div>
        <nav className={s.navigation}>
          <button
            className={s.navigation_burger}
            onClick={() => handleOpenModal()}>
            <ReactSVG src={burger} />
          </button>
          <nav className={s.navigation_list}>
            <NavLink className={s.navigation_item} to="/">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
