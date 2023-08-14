import React from "react";
import s from "./intro.module.scss";
import photo from "../../images/cut-photo.jpg";
import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <section className={s.section_intro}>
      <div className={`container ${s.intro}`}>
        <img
          className={s.photo}
          srcSet={photo}
          alt="Anzhelika Dubinenko"
          width={166}
          height={249}
        />
        <div className={s.intro_content}>
          <div className={s.content}>
            <h2 className={s.content_first}>Hello,</h2>
            <h1 className={s.content_second}>I am Anzhelika Dubinenko</h1>
            <h2 className={s.content_third}>Junior frontend developer</h2>
            <h3 className={s.content_four}>
              I'm a Junior Frontend Developer looking for a full-time position
              in a new company or team. I have basic knowledge and practical
              experience of work with HTML, CSS, JavaScript, React, Redux.
            </h3>
          </div>
          <ul className={s.switch}>
            <li className={s.switch_resume}>
              <NavLink className={s.switch_resumeBtn} to="/resume">
                resume
              </NavLink>
            </li>
            <li className={s.switch_projects}>
              <NavLink className={s.switch_projectsBtn} to="/projects">
                projects
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
