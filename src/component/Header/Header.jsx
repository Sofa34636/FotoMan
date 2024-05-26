import React, { useState, useRef } from "react";
import c from "./Header.module.css";
import logo from "../image/лого.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <header className={c.header}>
      <div className={c.container}>
        <div className={c.header__row}>
          <div className={c.header__logo}>
            <img src={logo} alt="#"></img>
          </div>
          <nav className={c.header__nav}>
            <button className={c.menu__btn} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={menuOpen ? `${c.menuOpen}` : ''}>
              <li>
                <a href="#me">обо мне</a>
              </li>
              <li>
                <a href="#por">портфолио</a>
              </li>
              <li>
                <a href="#kont">контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
