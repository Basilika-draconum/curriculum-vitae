import React from "react";
import s from "./resume.module.scss";

const Resume = () => {
  return (
    <main className={s.section_resume}>
      <div className={`container ${s.resume}`}>
        <h1>Resume</h1>
        <section>
          <h2>Work Experience</h2>
          <ul>
            <li>
              <h3>Climbing coach, Kharkiv</h3>
              <p>2019-2022</p>
              <p>
                Developed an exercise program for clients. Conducted group and
                individual trainings. Conducted individual training with about
                100 clients, 60% achieved corresponding success.Worked with
                professional athlete and other coaches.
              </p>
            </li>
            <li>
              <h3>Travel organizer, Kharkiv</h3>
              <p>2019-2022</p>
              <p>
                Compiled a travel program for kayaking, climbing, hiking and
                skiing. I bought tickets, created programs for recreation, and
                as a result of all the trips, no one had any injuries.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>

          <ul>
            <li>
              <h3>IT school GoIT</h3>
              <p>2022-2023</p>
              <p>FullStack Developer</p>
            </li>
            <li>
              <h3>Yaroslav Mudryi National Law University</h3>
              <p>2015-2021</p>
              <p>Corporative law. Master's degree</p>
            </li>
            <li>
              <h3>Kherson State University</h3>
              <p>2017-2021</p>
              <p>Physical education and sport. Bachelor's degree</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Tech Skills</h2>
          <ul>
            <li>HTML5/CSS3/SASS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Rest API</li>
            <li>Parcel</li>
            <li>Webpack</li>
            <li>Node.js</li>
          </ul>
        </section>
        <section>
          <h2>Soft Skills</h2>
          <ul>
            <li>Teamwork</li>
            <li>Time management</li>
            <li>Eager to learn</li>
            <li>Broad-minded</li>
            <li>Communicative skills</li>
            <li>Responsibility</li>
          </ul>
        </section>
        <section>
          <h2>Languages</h2>
          <ul>
            <li>English - Intermediate</li>
            <li>Ukrainian - Native</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Resume;
