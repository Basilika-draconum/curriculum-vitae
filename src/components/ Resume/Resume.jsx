import React, { useEffect, useState } from "react";
import { client } from "../../client";
import s from "./resume.module.scss";

const Resume = () => {
const [experienceData, setExperienceData] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type=="experience"]')
      .then((data) => setExperienceData(data))
      .catch(console.error);
  }, []);

  return (
    <section className={s.section_resume}>
      <div className={`container ${s.resume}`}>
        <h1 className="title_page">Resume</h1>
        <div className={s.block}>
          <h2 className={s.block_title}>Work Experience</h2>
            <ul className={s.block_list}>
            {experienceData &&
              experienceData.map((item) => (
                <li className={s.block_item} key={experienceData._id}>
                  <h3 className={s.item_title}>{item.title}</h3>
                  <p className={s.item_years}>{item.year}</p>
                  <p className={s.item_text}>
                    {item.description}
                  </p>
                </li>))}
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
