import React from "react";
import b from "./Footer.module.css";
import Insta from "../image/message/Instagram.svg";
import Telegram from "../image/message/Telegram.svg";
import Whatsapp from "../image/message/Whatsapp.svg";

function Footer() {
  return (
    <footer>
      <section className={b.footer}>
        <div className={b.container}>
          <div className={b.footer__rov}>
            
            <h1 className={b.footer__title}> контакты</h1>
          </div>
          <div className={b.footer__inner}>
            <p className={b.footer__text}>
              Ищете талантливого фотографа на мероприятие?
            </p>
          </div>
        </div>
        <div className={b.yellow_die_text}>
          <div className={b.container}>
            <p className={b.footer__text_yellow}>
              Свяжитесь со мной прямо сейчас, чтобы ВАША фотосессия была
              незабываемой.
            </p>
          </div>
        </div>
        <div className={b.container}>
          <div className={b.footer__contacts}>
            <ul className={b.footer__social}>
              <li className={b.footer__social_item}>
                <a href="#" className={b.footer__social_link}>
                  <img src={Insta} alt="#" className={b.footer__social_img} />
                </a>
              </li>
              <li className={b.footer__social_item}>
                <a href="#" className={b.footer__social_link}>
                  <img
                    src={Telegram}
                    alt="#"
                    className={b.footer__social_img}
                  />
                </a>
              </li>
              <li className={b.footer__social_item}>
                <a href="#" className={b.footer__social_link}>
                  <img
                    src={Whatsapp}
                    alt="#"
                    className={b.footer__social_img}
                  />
                </a>
              </li>
              </ul>
              <div>
              <a className={b.footer__num}>
                +7 909 657 837
              </a>
              </div>     
          </div>
        </div>
      </section>
    </footer>
  );
}
export default Footer;
