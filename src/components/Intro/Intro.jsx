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
        <div className={s.content}>
          <h2>Hello,</h2>
        </div>
      </div>
    </main>
  );
};

export default Intro;
