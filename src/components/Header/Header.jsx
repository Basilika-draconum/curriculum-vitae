import React, { useState } from "react";

import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal"
import s from "./header.module.scss";
import burger from "../../images/icons/menu.svg";
import x from "../../images/icons/x.svg";


const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
     document.body.style.overflow = 'hidden'
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
            {openModal?<ReactSVG src={x}/>:<ReactSVG src={burger} /> }
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
      {openModal && <Modal openModal={openModal} />} 
    </header>
    
  );
};

export default Header;
