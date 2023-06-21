import React from "react";
import s from "./header.module.scss";

const Header = () => {
  return (
    <header className={s.section_header}>
      <div className={`container ${s.header}`}>
        <div className={s.info}>
          <h1 className={s.title}>Dubinenko Anzhelika</h1>
          <p className={s.position}>/</p>
          <p className={s.position}> Frontend Developer</p>
        </div>
        <nav className={s.navigation}>
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
