import React, { useState } from "react";
import styles from "./Header.module.scss";
import siteLogo from "../../assets/images/site-logo/logo.svg";
import { Link } from "react-router-dom";
import { navigation } from "../../constants/navigation.constant";
import Button from "../../components/shared/Button/MainButton";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <header id={styles.header}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link to={"/"}>
              <img src={siteLogo} alt="site-logo" />
            </Link>
          </div>
          <div
            className={`${styles.navbar}  ${
              menuBar ? styles.active_navbar : ""
            }`}
          >
            <div className="container">
              <ul className={styles.navlink_lists}>
                {navigation.map((nav, i) => (
                  <li key={i} className={styles.nav_list}>
                    <a onClick={() => setMenuBar(false)} className={styles.link} href={nav.path}>
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.header_end}>
            <div className={styles.login_start}>
              <div className={styles.login}>Login</div>
              <Button
                className={styles.contact_btn}
                text="Start For Free"
              ></Button>
            </div>
            <div
              className={`${styles.icon_button} ${
                menuBar ? styles.active : ""
              }`}
              onClick={() => setMenuBar(!menuBar)}
            >
              {menuBar ? (
                <HiX className={`${styles.icon} ${styles.close_icon}`} />
              ) : (
                <HiMenu className={`${styles.icon} ${styles.menu_icon}`} />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
