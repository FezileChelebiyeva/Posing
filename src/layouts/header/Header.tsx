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
          <div className="logo">
            <img src={siteLogo} alt="site-logo" />
          </div>
        </div>
        <div className="navlinks">
          <ul className="navlink_lists">
            {navigation.map((nav, i) => {
              return (
                <li key={i} className="nav_list">
                  <Link to={nav.path}>{nav.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="login_start">
          <div className="login">Login</div>
          <Button text="Start For Free"></Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
