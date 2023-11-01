import React from "react";
import s from "./resume.module.scss";

const SkillItem = ({ skill }) => (
  <li className={`${s.item_title} ${s.skills_title}`}>{skill}</li>
);

const Resume = () => {
  return (
    <section className={s.section_resume}>
      <div className={`container ${s.resume}`}>
        <h1 className="title_page">Resume</h1>
        <div className={s.block}>
          <h2 className={s.block_title}>Work Experience</h2>
          <ul className={s.block_list}>
            <li className={s.block_item}>
              <h3 className={s.item_title}>Climbing coach, Kharkiv</h3>
              <p className={s.item_years}>2019-2022</p>
              <p className={s.item_text}>
                Developed an exercise program for clients. Conducted group and
                individual trainings. Conducted individual training with about
                100 clients, 60% achieved corresponding success.Worked with
                professional athlete and other coaches.
              </p>
            </li>
            <li className={s.block_item}>
              <h3 className={s.item_title}>Travel organizer, Kharkiv</h3>
              <p className={s.item_years}>2019-2022</p>
              <p className={s.item_text}>
                Compiled a travel program for kayaking, climbing, hiking and
                skiing. I bought tickets, created programs for recreation, and
                as a result of all the trips, no one had any injuries.
              </p>
            </li>
          </ul>
        </div>
        <div className={s.block}>
          <h2 className={s.block_title}>Education</h2>
          <ul className={s.block_list}>
            <li className={s.block_item}>
              <h3 className={s.item_title}>
                IT school GoIT{" "}
                <a
                  className={s.certificate}
                  href="https://drive.google.com/file/d/1SJ5O0wLHJYw8YJxsx7SmMcj5EVEMt507/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate
                </a>
              </h3>

              <p className={s.item_years}>2022-2023</p>
              <p className={s.item_text}>FullStack Developer</p>
            </li>
            <li className={s.block_item}>
              <h3 className={s.item_title}>
                Yaroslav Mudryi National Law University
              </h3>
              <p className={s.item_years}>2015-2021</p>
              <p className={s.item_text}>Corporative law. Master's degree</p>
            </li>
            <li className={s.block_item}>
              <h3 className={s.item_title}>Kherson State University</h3>
              <p className={s.item_years}>2017-2021</p>
              <p className={s.item_text}>
                Physical education and sport. Bachelor's degree
              </p>
            </li>
          </ul>
        </div>
        <div className={s.block}>
          <h2 className={s.block_title}>Tech Skills</h2>
          <ul className={s.block_list}>
            {[
              "HTML5 / CSS / SASS",
              "Tailwind CSS",
              "JavaScript",
              "React.js",
              "Redux / Redux Toolkit",
              "Rest API",
              "Git / GitHub",
              "Node.js",
              "MongoDB",
            ].map((skill) => (
              <SkillItem skill={skill} key={skill} />
            ))}
          </ul>
        </div>
        <div className={s.block}>
          <h2 className={s.block_title}>Soft Skills</h2>
          <ul className={s.block_list}>
            {[
              "Teamwork",
              "Time managment",
              "Eager to learn",
              "Broad-minded",
              "Communicative skills",
              " Responsibility",
            ].map((skill) => (
              <SkillItem skill={skill} key={skill} />
            ))}
          </ul>
        </div>
        <div className={s.block}>
          <h2 className={s.block_title}>Languages</h2>
          <ul className={s.block_list}>
            {["English - Intermediate", "Ukrainian - Native"].map((skill) => (
              <SkillItem skill={skill} key={skill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
