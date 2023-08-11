import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";

import { ReactComponent as Solo } from "../../images/icons/people solo.svg";
import { ReactComponent as Group } from "../../images/icons/people team.svg";
import s from "./projects.module.scss";
import Filter from "../Filter/Filter";
const Projects = () => {
  const [projectData, setProjectData] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    client
      .fetch('*[_type=="project"]')
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  const filterProjects = (projects, filter) => {
    return projects.filter((project) => {
      if (filter === "all") {
        return true;
      } else if (filter === "solo" && project.type === "solo") {
        return true;
      } else if (filter === "group" && project.type === "group") {
        return true;
      }
      return false;
    });
  };
  const filteredProjects = filterProjects(projectData, filter);
  
  return (
    <section className={s.section_projects}>
      <div className={`container ${s.projects}`}>
        <h1 className="title_page">Projects</h1>
        <Filter onChangeFilter={handleFilterChange} />
        {projectData &&
          filteredProjects.map((project) => (
            <div className={s.block} key={project._id}>
              <div className={s.block_title}>
                <h2 className={s.title}>{project.title}</h2>
                {project.projectType === "group" ? (
                  <Group className={s.block_icon} />
                ) : (
                  <Solo className={s.block_icon} />
                )}
              </div>
              <h3 className={s.library}>{project.library}</h3>
              <p className={s.description}>{project.description}</p>
              <img
                src={urlFor(project.image).url()}
                alt={project.image.alt}
                className={s.picture}
              />
              <ul className={s.wrapBtn}>
                <li className={`${s.btn} ${s.btn_view}`}>
                  <a
                    className={s.linkView}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view
                  </a>
                </li>
                <li className={`${s.btn} ${s.btn_github}`}>
                  <a
                    className={s.linkGitHub}
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
