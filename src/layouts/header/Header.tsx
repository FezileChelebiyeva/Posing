import React, { useState } from "react";
import styles from "./Header.module.scss";
import siteLogo from "../../assets/images/site-logo/logo.svg";
import { Link } from "react-router-dom";
import { navigation } from "../../constants/navigation.constant";
import Button from "../../components/shared/Button/MainButton";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuBar, setMenuBar] = useState(true);

  return (
    <header id={styles.header}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={siteLogo} alt="site-logo" />
          </div>
          {!menuBar ? (
            <div
              className={`${styles.mobile_navbar} ${
                !menuBar ? styles.active_navbar : ""
              }`}
            >
              <div className="container">
                <ul className={styles.navlink_lists}>
                  {navigation.map((nav, i) => {
                    return (
                      <li key={i} className={styles.nav_list}>
                        <Link className={styles.link} to={nav.path}>
                          {nav.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <div className={styles.navlinks}>
              <ul className={styles.navlink_lists}>
                {navigation.map((nav, i) => {
                  return (
                    <li key={i} className={styles.nav_list}>
                      <Link className={styles.link} to={nav.path}>
                        {nav.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
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
                menuBar ? "" : styles.active
              }`}
            >
              <HiMenu
                onClick={() => setMenuBar(!menuBar)}
                className={`${styles.icon} ${styles.menu_icon}`}
              />
              <HiX
                onClick={() => setMenuBar(!menuBar)}
                className={`${styles.icon} ${styles.close_icon}`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
