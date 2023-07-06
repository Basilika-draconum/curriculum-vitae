import React from "react";
import s from "./contact.module.scss";

const Contact = () => {
  return (
    <section className={s.section_contact}>
      <div className={`container ${s.contact}`}>
        <h1 className="title_page">Contact</h1>
        <div className={s.block}>
          <p className={s.contact_info}>
            Get in touch with me so we can collaborate on your next project!
          </p>
          <ul className={s.contact_list}>
            <li className={s.contact_item}>
              <h2 className={s.contact_title}>Phone:</h2>
              <a className={s.contact_tel} href="tel:+380950491921">
                +38 095 049 19 21
              </a>
            </li>
            <li className={s.contact_item}>
              <h2 className={s.contact_title}>Email:</h2>
              <a className={s.contact_mail} href="mailto:14basilika@gmail.com">
                14basilika@gmail.com
              </a>
            </li>
            <li className={s.contact_item}>
              <h2 className={s.contact_title}>Find me on</h2>
              {/* <ul className={s.list_link}>
                <li className={s.item_link}>
                  <a
                    className={s.item_link_telegram}
                    href="https://t.me/Lika_Basilika"
                    target="_blank"
                    rel="noopener noreferrer">
                    <ReactSVG src={telegram} width={40} height={40} />
                  </a>
                </li>
                <li className={s.item_link}>
                  <a
                    className={s.item_link_linkedin}
                    href="https://www.linkedin.com/in/lika-basilika/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <ReactSVG src={linkedin} />
                  </a>
                </li>
                <li className={s.item_link}>
                  <a
                    className={s.item_link_git}
                    href="https://github.com/Basilika-draconum"
                    target="_blank"
                    rel="noopener noreferrer">
                    <ReactSVG src={github} />
                  </a>
                </li>
              </ul> */}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
