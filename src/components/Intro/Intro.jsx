import React from "react";
import s from "./intro.module.scss";
import photo from "../../images/Photo.jpeg";

const Intro = () => {
  return (
    <main className={s.section_intro}>
      <div className={`container ${s.intro}`}>
        <img
          className={s.photo}
          srcSet={photo}
          alt="Anzhelika Dubinenko"
          width={338}
          height={483}
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
              <a className={s.switch_resumeBtn} href="http://">
                resume
              </a>
            </li>
            <li className={s.switch_projects}>
              <a className={s.switch_projectsBtn} href="http://">
                projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Intro;
