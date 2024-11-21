import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import siteLogo from "../../assets/images/site-logo/logo.svg";
import { navigation } from "../../constants/navigation.constant";
import Button from "../../components/shared/Button/MainButton";
import { HiMenu, HiX } from "react-icons/hi";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import {
  setForgetPassword,
  setLoginRegister,
} from "../../redux/slice/auth.slice";
import LoginModal from "../../components/layouts/header/login-modal/LoginModal";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const dispatch = useDispatch();
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const showLoginModal = () => {
    setIsLoginModalVisible(true);
  };

  const handleCancel = () => {
    setIsLoginModalVisible(false);
  };

  return (
    <header id={styles.header}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <a href="/">
              <img src={siteLogo} alt="site-logo" />
            </a>
          </div>
          <div
            ref={navbarRef}
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
              <div
                onClick={() => {
                  showLoginModal();
                  dispatch(setLoginRegister(false));
                  dispatch(setForgetPassword(false));
                }}
                className={styles.login}
              >
                Login
              </div>
              <Button
                className={styles.contact_btn}
                text="Start For Free"
                onClick={() => {
                  showLoginModal();
                  dispatch(setLoginRegister(true));
                  dispatch(setForgetPassword(false));
                }}
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
    </header>
  );
};

export default Header;
