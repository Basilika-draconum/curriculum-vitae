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
            <p className={s.content_four}>
              I'm a Junior Frontend Developer with a solid understanding of
              fundamental concepts and technical aspects of HTML, CSS/SCSS,
              JavaScript, React, Redux. My goal is to progress in the industry
              and enhance my skills by crafting modern and high-quality web
              applications with a friendly team.
            </p>
            <p className={s.content_four}>
              I firmly uphold the belief that continuous developer growth is
              paramount, and as such, I am dedicated to consistently refining my
              programming capabilities while also honing my English language
              proficiency.
            </p>
            <p className={s.content_four}>
              I am genuinely excited about the opportunity to contribute my
              frontend skills towards crafting impactful solutions.
            </p>
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
