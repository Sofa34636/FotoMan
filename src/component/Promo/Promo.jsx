import React from "react";
import a from "./Promo.module.css";

const Promo = () => {
  return (
    <main className={a.main}>
      <section className={a.top}>
        <div className={a.container}>
          <div className={a.top__inner}>
            <h1 className={a.top__title}>в объективе</h1>
          </div>
        </div>
      </section>
    </main>

    //<div className={a.presentation}>
    //</div>
  );
};
export default Promo;
