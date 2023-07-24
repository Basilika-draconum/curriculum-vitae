import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";

import { ReactComponent as Solo } from "../../images/icons/people solo.svg";
import { ReactComponent as Group } from "../../images/icons/people team.svg";
import s from "./projects.module.scss";
const Projects = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type=="project"]')
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <section className={s.section_projects}>
      <div className={`container ${s.projects}`}>
        <h1 className="title_page">Projects</h1>
        {/* <form>
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
         </form> */}
        {projectData &&
          projectData.map((project) => (
            <div className={s.block} key={project._id}>
              <div className={s.block_title}>
                <h2 className={s.title}>{project.title}</h2>
                {( project.projectType  === "group") ? <Group className={s.block_icon}/> : <Solo className={s.block_icon} />}
              </div>
              <h3 className={s.library}>{project.library}</h3>
              <p className={s.description}>{project.description}</p>
              <img src={urlFor(project.image).url()} alt={project.image.alt} className={s.picture} />
              <ul className={s.wrapBtn}>
                <li  className={`${s.btn} ${s.btn_view}`}>
                  <a  className={s.linkView} href={project.liveLink} target="_blank" rel="noopener noreferrer">view</a>
                </li>
                <li  className={`${s.btn} ${s.btn_github}`}>
                  <a className={s.linkGitHub} href={project.liveLink} target="_blank" rel="noopener noreferrer">github</a>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
