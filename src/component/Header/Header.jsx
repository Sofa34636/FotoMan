import React from "react";
import c from "./Header.module.css";
import logo from "../image/лого.svg";

function Header() {
  return (
    <header className={c.header}>
      <div className={c.container}>
        <div className={c.header__row}>
          <div className={c.header__logo}>
            <img src={logo} alt="#"></img>
          </div>
          <nav className={c.header__nav}>
            <ul>
              <li>
                <a href="#">обо мне</a>
              </li>
              <li>
                <a href="#">портфолио</a>
              </li>
              <li>
                <a href="#">контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
