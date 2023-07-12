import React from "react";

import { ReactComponent as Solo } from "../../images/icons/people solo.svg";
import { ReactComponent as Group } from "../../images/icons/people team.svg";
import app from "../../images/mobileapp 380.jpeg";
import s from "./projects.module.scss";
const Projects = () => {
  return (
    <section className={s.section_projects}>
      <div className={`container ${s.projects}`}>
        <h1 className="title_page">Projects</h1>
        <form>
          <fieldset className={s.radio}>
            <div className={s.radio_item}>
              <input
                type="radio"
                name="all"
                id="all"
                value="all"
                checked
                className={s.radio_input}
              />
              <label htmlFor="all" className={s.radio_label}>
                all
              </label>
            </div>
            <div className={s.radio_item}>
              <input
                type="radio"
                name="solo"
                id="solo"
                value="solo"
                className={s.radio_input}
              />
              <label htmlFor="solo" className={s.radio_label}>
                solo
              </label>
              <Solo className={s.icon_proj} />
            </div>
            <div className={s.radio_item}>
              <input
                type="radio"
                name="group"
                id="group"
                value="group"
                className={s.radio_input}
              />
              <label htmlFor="group" className={s.radio_label}>
                group
              </label>
              <Group className={s.icon_proj} />
            </div>
          </fieldset>
        </form>

        <div className={s.block}>
          <div className={s.block_title}>
            <h2 className={s.title}>MobileApp</h2>
            <Solo className={s.block_icon} />
          </div>
          <h3 className={s.library}>HTML5, CSS, SASS, JavaScript, Parcel</h3>
          <p className={s.description}>
            Modern responsive landing page with adaptive layouts design, modal
            windows and attractive design. Role: scrum-master, developer.
          </p>
          <img src={app} alt="mobileapp" className={s.picture} />
          <div className={s.wrapBtn}>
            <button className={`${s.btn} ${s.btn_view}`}>view</button>
            <button className={`${s.btn} ${s.btn_github}`}>github</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
