import React from "react";
import styles from "./Header.module.scss";
import siteLogo from "../../assets/images/site-logo/logo.svg";
import { Link } from "react-router-dom";
import { navigation } from "../../constants/navigation.constant";
import Button from "../../components/shared/Button/MainButton";
const Header = () => {
  return (
    <header id={styles.header}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={siteLogo} alt="site-logo" />
          </div>
          <div className={styles.navlinks}>
            <ul className={styles.navlink_lists}>
              {navigation.map((nav, i) => {
                return (
                  <li key={i} className={styles.nav_list}>
                    <Link className={styles.link} to={nav.path}>{nav.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.login_start}>
            <div className={styles.login}>Login</div>
            <Button className={styles.contact_btn} text="Start For Free"></Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
