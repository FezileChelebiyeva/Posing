import React from "react";
import styles from "./RegisterModal.module.scss";
import regImg from "../../../../assets/images/home/store-section/retail-store.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Button from "../../../shared/Button/MainButton";

const RegisterModal = () => {
  return (
    <section id={styles.register_modal}>
      <div className={styles.register_img}>
        <img src={regImg} alt="" />
      </div>
      <div className={styles.register_form}>
        <h2 className={styles.form_title}>Create your new account</h2>
        <form action="" className={styles.form}>
          <div className={styles.register_input}>
            <input type="text" name="" id="" placeholder="Your Name" />
          </div>
          <div className={styles.register_input}>
            <input type="email" name="" id="" placeholder="Email Adress" />
          </div>
          <div className={styles.register_input}>
            <input type="password" name="" id="" placeholder="Password" />
          </div>
          <div className={styles.agree_terms}>
            <div className={styles.agree_checkbox}>
              <input type="checkbox" name="agree" id="agree" />
              <label htmlFor="agree">I agree to the terms of service</label>
            </div>
          </div>
          <div>
            <Button text="Register"></Button>
          </div>
          <div className={styles.register}>
            <p>
              Already have an account? <span>Login</span>
            </p>
          </div>
          <p className={styles.or}>
            <span>or</span>
          </p>
          <div className={styles.other_options}>
            <div className={`${styles.option_icon} ${styles.google_bg}`}>
              <AiOutlineGoogle />
            </div>
            <div className={`${styles.option_icon} ${styles.github_bg}`}>
              <FaGithub />
            </div>
            <div className={`${styles.option_icon} ${styles.facebook_bg}`}>
              <FaFacebookF />
            </div>
            <div className={`${styles.option_icon} ${styles.linkedin_bg}`}>
              <FaLinkedinIn />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterModal;
