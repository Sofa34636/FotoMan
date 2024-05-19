import React from "react";
import d from "./Info.module.css";
import Insta from "../../image/message/Instagram.svg";
import Telegram from "../../image/message/Telegram.svg";
import Whatsapp from "../../image/message/Whatsapp.svg";

function Info() {
  return (
    <div className={d.container}>
      <div className={d.info_text}>
        <div></div>
        <h1 className={d.info_title}>ОБО МНЕ</h1>
      </div>
      <div>
        <img src="#" alt="#" className={d.info_social_img} />
      </div>
      <div className={d.footer__contacts}>
        <ul className={d.footer__social}>
          <li className={d.footer__social_item}>
            <a href="#" className={d.footer__social_link}>
              <img src={Insta} alt="#" className={d.footer__social_img} />
            </a>
          </li>
          <li className={d.footer__social_item}>
            <a href="#" className={d.footer__social_link}>
              <img src={Telegram} alt="#" className={d.footer__social_img} />
            </a>
          </li>
          <li className={d.footer__social_item}>
            <a href="#" className={d.footer__social_link}>
              <img src={Whatsapp} alt="#" className={d.footer__social_img} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Info;
