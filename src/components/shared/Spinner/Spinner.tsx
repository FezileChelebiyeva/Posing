import React from "react";
import styles from "./Spinner.module.scss";
import logo from "../../../assets/images/spinner/spinner_logo.svg";
const Spinner = () => {
  return (
    <div className={styles.spinner_component}>
      <div className={styles.custom_spinner}>
        <div className={styles.inner_circle}>
          <img src={logo} alt="spinner-logo" />
        </div>
        <div className={styles.rotating_border}></div>
      </div>
    </div>
  );
};

export default Spinner;
