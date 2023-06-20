import React, { useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <div className={`${styles.header_content} container`}>
        <img src={logo} alt="Logo" className={styles.logo} />

        <ul className={`${menuActive ? styles.active_list : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className={styles.menu_btn} onClick={handleMenuClick}>
          <i
            className={`fas ${
              menuActive ? "fa-times" : "fa-bars"
            } open-list`}></i>
        </div>
        <div
          className={`${styles.overlay} ${
            menuActive ? styles.active_overlay : ""
          }`}
          onClick={() => handleMenuClick()}></div>
      </div>
    </header>
  );
};

export default Header;
