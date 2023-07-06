import React from "react";
import s from "./resume.module.scss";

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
              <h3 className={s.item_title}>IT school GoIT</h3>
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
            <li className={` ${s.item_title} ${s.skills_title}`}>
              HTML5/CSS3/SASS
            </li>
            <li className={` ${s.item_title} ${s.skills_title}`}>JavaScript</li>
            <li className={` ${s.item_title} ${s.skills_title}`}>React</li>
            <li className={` ${s.item_title} ${s.skills_title}`}>Redux</li>
            <li className={` ${s.item_title} ${s.skills_title}`}>Rest API</li>
            <li className={` ${s.item_title} ${s.skills_title}`}>Parcel</li>
            <li className={` ${s.item_title} ${s.skills_title}`}>Webpack</li>
            <li className={` ${s.item_title} ${s.skills_title}`}>Node.js</li>
          </ul>
        </div>
        <div className={s.block}>
          <h2 className={s.block_title}>Soft Skills</h2>
          <ul className={s.block_list}>
            <li className={` ${s.item_title} ${s.skills_title}`}>Teamwork</li>
            <li className={` ${s.item_title} ${s.skills_title}`}>
              Time management
            </li>
            <li className={` ${s.item_title} ${s.skills_title}`}>
              Eager to learn
            </li>
            <li className={` ${s.item_title} ${s.skills_title}`}>
              Broad-minded
            </li>
            <li className={` ${s.item_title} ${s.skills_title}`}>
              Communicative skills
            </li>
            <li className={` ${s.item_title} ${s.skills_title}`}>
              Responsibility
            </li>
          </ul>
        </div>
        <div className={s.block}>
          <h2 className={s.block_title}>Languages</h2>
          <ul className={s.block_list}>
            <li className={` ${s.item_title} ${s.skills_title}`}>
              English - Intermediate
            </li>
            <li className={` ${s.item_title} ${s.skills_title}`}>
              Ukrainian - Native
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
