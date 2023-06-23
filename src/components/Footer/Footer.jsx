import React from "react";
import { ReactSVG } from "react-svg";

import s from "./footer.module.scss";

import telegram from "../../images/icons/telegram.svg";
import linkedin from "../../images/icons/linkedin.svg";
import github from "../../images/icons/github.svg";

const Footer = () => {
  return (
    <footer className={s.section_footer}>
      <div className={`container ${s.footer}`}>
        <p className={s.footer_secured}>
          &#169; 2035 Anzhelika Dubinenko.
          <br className={s.footer_secured_br} /> Powered and secured by myself
        </p>
        <ul className={s.footer_list}>
          <li className={s.footer_item}>
            <h2 className={s.footer_title}>Phone:</h2>
            <a className={s.footer_tel} href="tel:+380950491921">
              +38 095 049 19 21
            </a>
          </li>
          <li className={s.footer_item}>
            <h2 className={s.footer_title}>Email:</h2>
            <a className={s.footer_mail} href="mailto:14basilika@gmail.com">
              14basilika@gmail.com
            </a>
          </li>
          <li className={s.footer_item}>
            <h2 className={s.footer_title}>Find me on</h2>
            <ul className={s.list_link}>
              <li className={s.item_link}>
                <a
                  className={s.item_link_telegram}
                  href="https://t.me/Lika_Basilika"
                  target="_blank"
                  rel="noopener noreferrer">
                  {/* <svg className="icon icon-telegram">
                    <use href={sprite + "#icon-telegram"} />
                  </svg> */}

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
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
