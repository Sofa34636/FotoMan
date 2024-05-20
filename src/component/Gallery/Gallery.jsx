import React from "react";
import f from "./Gallery.module.css";

import q1 from "./FotoGallery/20170829_002001-01.jpeg";
import q2 from "./FotoGallery/20181224_151937-01.jpeg";
import q3 from "./FotoGallery/20181225_100232-01.jpeg";
import q4 from "./FotoGallery/20181225_104010-01.jpeg";
import q5 from "./FotoGallery/20181225_111410-01.jpeg";
import q6 from "./FotoGallery/20181225_115143-01.jpeg";
import q7 from "./FotoGallery/20181225_124340-01.jpeg";
import q8 from "./FotoGallery/20181225_130424-01.jpeg";
import q9 from "./FotoGallery/20181225_143043-01.jpeg";
import q10 from "./FotoGallery/20181226_104150-01.jpeg";
import q11 from "./FotoGallery/20181228_081756-01.jpeg";
import q12 from "./FotoGallery/20181230_155506-01.jpeg";
import q13 from "./FotoGallery/20181230_160726-01.jpeg";

import w1 from "./FotoGallery/DSC_1.jpeg";
import w2 from "./FotoGallery/DSC_2.jpeg";
import w3 from "./FotoGallery/DSC_3.jpeg";
import w4 from "./FotoGallery/DSC_4.jpeg";
import w5 from "./FotoGallery/DSC_5.jpeg";
import w6 from "./FotoGallery/DSC_6.jpeg";
import w7 from "./FotoGallery/DSC_7.jpeg";
import w8 from "./FotoGallery/DSC_8.jpeg";
import w9 from "./FotoGallery/DSC_9.jpeg";
import w10 from "./FotoGallery/DSC_10.jpeg";
import w12 from "./FotoGallery/DSC_12.jpeg";
import w13 from "./FotoGallery/DSC_13.jpeg";
import w14 from "./FotoGallery/DSC_14.jpeg";
import w15 from "./FotoGallery/DSC_15.jpeg";
import w16 from "./FotoGallery/DSC_16.jpeg";
import w17 from "./FotoGallery/DSC_17.jpeg";
import w18 from "./FotoGallery/DSC_18.jpeg";
import w19 from "./FotoGallery/DSC_19.jpeg";
import w20 from "./FotoGallery/DSC_20.jpeg";
import w21 from "./FotoGallery/DSC_21.jpeg";
import w22 from "./FotoGallery/DSC_22.jpeg";
import w23 from "./FotoGallery/DSC_23.jpeg";

import e1 from "./FotoGallery/photo_1.jpg";
import e2 from "./FotoGallery/photo_2.jpg";
import e3 from "./FotoGallery/photo_3.jpg";
import e4 from "./FotoGallery/photo_4.jpg";
import e5 from "./FotoGallery/photo_5.jpg";
import e6 from "./FotoGallery/photo_6.jpg";
import e7 from "./FotoGallery/photo_7.jpg";


function Gallery() {
  return (
    <div className={f.container}>
      <div className={f.heading}>
        <h3>
          Photo <span>Gallery</span>
        </h3>
      </div>
      <div className={f.box}>
        <div className={f.dream}>
        <img src={q1} alt="#" className={f.footer__social_img} />
        <img src={q2} alt="#" className={f.footer__social_img} />
        <img src={w2} alt="#" className={f.footer__social_img} />
        <img src={w3} alt="#" className={f.footer__social_img} />
        <img src={e2} alt="#" className={f.footer__social_img} />
        <img src={q7} alt="#" className={f.footer__social_img} />
        <img src={q8} alt="#" className={f.footer__social_img} />
        <img src={e3} alt="#" className={f.footer__social_img} />
        <img src={w13} alt="#" className={f.footer__social_img} />
        <img src={w14} alt="#" className={f.footer__social_img} />
        <img src={q12} alt="#" className={f.footer__social_img} />
        <img src={w21} alt="#" className={f.footer__social_img} />
        <img src={e5} alt="#" className={f.footer__social_img} />
        <img src={q13} alt="#" className={f.footer__social_img} />
        </div>
        <div className={f.dream}>
        <img src={w1} alt="#" className={f.footer__social_img} />
        <img src={e7} alt="#" className={f.footer__social_img} /> 
        <img src={q3} alt="#" className={f.footer__social_img} />
        <img src={q4} alt="#" className={f.footer__social_img} />
        <img src={w6} alt="#" className={f.footer__social_img} />
        <img src={w9} alt="#" className={f.footer__social_img} />
        <img src={w10} alt="#" className={f.footer__social_img} />
        <img src={w12} alt="#" className={f.footer__social_img} />
        <img src={w15} alt="#" className={f.footer__social_img} />
        <img src={w16} alt="#" className={f.footer__social_img} />
        <img src={q11} alt="#" className={f.footer__social_img} />
        <img src={w17} alt="#" className={f.footer__social_img} />
        <img src={w18} alt="#" className={f.footer__social_img} />
        <img src={w23} alt="#" className={f.footer__social_img} />
        </div>
        <div className={f.dream}>
        <img src={e1} alt="#" className={f.footer__social_img} />
        <img src={q5} alt="#" className={f.footer__social_img} />
        <img src={w4} alt="#" className={f.footer__social_img} />
        <img src={w7} alt="#" className={f.footer__social_img} />
        <img src={w8} alt="#" className={f.footer__social_img} />
        <img src={w5} alt="#" className={f.footer__social_img} />
        <img src={q6} alt="#" className={f.footer__social_img} />
        <img src={q9} alt="#" className={f.footer__social_img} />
        <img src={q10} alt="#" className={f.footer__social_img} />
        <img src={e4} alt="#" className={f.footer__social_img} />
        <img src={w19} alt="#" className={f.footer__social_img} />
        <img src={w20} alt="#" className={f.footer__social_img} />
        <img src={e6} alt="#" className={f.footer__social_img} />
        <img src={w22} alt="#" className={f.footer__social_img} />
        </div>
      </div>
      <div className={f.btn}>
        <a href="#">More</a>
      </div>
    </div>
  );
}
export default Gallery;
