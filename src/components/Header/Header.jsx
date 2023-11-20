import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import navigationLink from "../../data/navigation.json";
import s from "./header.module.scss";
import burger from "../../images/icons/menu.svg";
import x from "../../images/icons/x.svg";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "scroll";
  };
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      handleCloseModal();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <header className={s.section_header}>
      <div className={s.header}>
        <div className={s.info}>
          <h1 className={s.title}>Dubinenko Anzhelika</h1>
          <p className={s.position_slash}>/</p>
          <p className={s.position}> Frontend Developer</p>
        </div>
        <nav className={s.navigation}>
          <button
            className={s.navigation_burger}
            onClick={
              openModal ? () => handleCloseModal() : () => handleOpenModal()
            }
          >
            {openModal ? <ReactSVG src={x} /> : <ReactSVG src={burger} />}
          </button>
          <nav className={s.navigation_list}>
            <ul className={s.navigation_list}>
              {navigationLink.map(({ label, href }) => (
                <li key={label} className={s.navigation_item}>
                  <NavLink activeclassname={s.active} to={href} href="/">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav> 
        </nav>
      </div>
      {openModal && <Modal closeModal={handleCloseModal} />}
      <div className={s.header_line}></div>
    </header>
  );
};

export default Header;
