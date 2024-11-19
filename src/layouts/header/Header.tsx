import React, { useState } from "react";
import styles from "./Header.module.scss";
import siteLogo from "../../assets/images/site-logo/logo.svg";
import { Link } from "react-router-dom";
import { navigation } from "../../constants/navigation.constant";
import Button from "../../components/shared/Button/MainButton";
import { HiMenu, HiX } from "react-icons/hi";
import { Modal } from "antd";
import LoginModal from "../../components/pages/header/login-modal/LoginModal";
import RegisterModal from "../../components/pages/header/register-modal/RegisterModal";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);

  // show-cancel login modal
  const showLoginModal = () => {
    setIsLoginModalVisible(true);
  };

  // show-cancel register modal
  const showRegisterModal = () => {
    setIsRegisterModalVisible(true);
  };

  const handleCancel = () => {
    setIsLoginModalVisible(false);
    setIsRegisterModalVisible(false);
  };

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
                    <a
                      onClick={() => setMenuBar(false)}
                      className={styles.link}
                      href={nav.path}
                    >
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.header_end}>
            <div className={styles.login_start}>
              <div onClick={() => showLoginModal()} className={styles.login}>
                Login
              </div>
              <Button
                className={styles.contact_btn}
                text="Start For Free"
                onClick={() => showRegisterModal()}
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
      <Modal
        open={isLoginModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={"90%"}
        style={{ minWidth: "320px" }}
        centered
      >
        <LoginModal />
      </Modal>
      <Modal
        open={isRegisterModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={"90%"}
        style={{ minWidth: "320px" }}
        centered
      >
        <RegisterModal />
      </Modal>
    </header>
  );
};

export default Header;
