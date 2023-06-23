import React, { useState } from "react";
import s from "./header.module.scss";
import burger from "../../images/icons/menu.svg";
// import sprite from "../../images/icons/common.svg";
import { ReactSVG } from "react-svg";

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
          <ul className={s.navigation_list}>
            <li className={s.navigation_item}>about me</li>
            <li className={s.navigation_item}>resume</li>
            <li className={s.navigation_item}>projects</li>
            <li className={s.navigation_item}>contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
