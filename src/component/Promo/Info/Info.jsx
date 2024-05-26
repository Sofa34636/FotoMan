import React from "react";
import d from "./Info.module.css";
import Insta from "../../image/message/Instagram.svg";
import Telegram from "../../image/message/Telegram.svg";
import Whatsapp from "../../image/message/Whatsapp.svg";
import men from "../../image/Марк_заливка_лист.png";

function Info() {
  return (
    <div className={d.container}>
      <div className={d.info_container}>
      <div className={d.info_text}>
        
       <a name='me'></a> <h1  className={d.info_title}>ОБО МНЕ</h1>
      </div>
      
        <img src={men} alt="#" className={d.info_social_img} />
        <div className={d.info__inner}>
            <p className={d.info__textt}>
            Меня зовут Марк и я - фотограф.</p><div className={d.info__pp}> <p>Я всегда стремлюсь к тому, чтобы каждый кадр был уникальным и выразительным.</p></div> <div className={d.info__p}><p > Чтобы каждая фотосессия была запоминающейся и незабываемой.</p></div>
            
          </div>
      </div>
    </div>
  );
}
export default Info;
