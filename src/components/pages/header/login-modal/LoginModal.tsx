import React, { useState } from "react";
import styles from "./LoginModal.module.scss";
import logImg from "../../../../assets/images/home/about-section/about_img_1.png";
import regImg from "../../../../assets/images/home/store-section/retail-store.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Button from "../../../shared/Button/MainButton";
const LoginModal = () => {
  const [forgetPassword, setForgetPassword] = useState(false);
  const [loginRegister, setLoginRegister] = useState(false);

  return (
    <section id={styles.login_modal}>
      {loginRegister ? (
        <div className={styles.login_img}>
          <img src={regImg} alt="" />
        </div>
      ) : (
        <div className={styles.login_img}>
          <img src={logImg} alt="" />
        </div>
      )}
      {/* <div className={styles.login_form}>
          <h2 className={styles.form_title}>Forgot your Password</h2>
          <form action="" className={styles.form}>
            <div className={styles.login_input}>
              <input type="email" name="" id="" placeholder="Email Adress" />
            </div>
            <div>
              <Button text="Send Me Email"></Button>
            </div>
            <div className={styles.register}>
              <p>
                Don't have an account?{" "}
                <span onClick={() => setLoginRegister(true)}>Register</span>
              </p>
            </div>
          </form>
        </div> */}
      {loginRegister ? (
        <div className={styles.login_form}>
          <h2 className={styles.form_title}>Create your new account</h2>
          <form action="" className={styles.form}>
            <div className={styles.login_input}>
              <input type="text" name="" id="" placeholder="Your Name" />
            </div>
            <div className={styles.login_input}>
              <input type="email" name="" id="" placeholder="Email Adress" />
            </div>
            <div className={styles.login_input}>
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
                Already have an account?{" "}
                <span onClick={() => setLoginRegister(false)}>Login</span>
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
      ) : (
        <div className={styles.login_form}>
          <h2 className={styles.form_title}>Login in to your posing account</h2>
          <form action="" className={styles.form}>
            <div className={styles.login_input}>
              <input type="email" name="" id="" placeholder="Email Adress" />
            </div>
            <div className={styles.login_input}>
              <input type="password" name="" id="" placeholder="Password" />
            </div>
            <div className={styles.remember_forget}>
              <div className={styles.remember_checkbox}>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <p
                onClick={() => setForgetPassword(true)}
                className={styles.forget}
              >
                Forgot Password?
              </p>
            </div>
            <div>
              <Button text="Login"></Button>
            </div>
            <div className={styles.register}>
              <p>
                Don't have an account?{" "}
                <span onClick={() => setLoginRegister(true)}>Register</span>
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
      )}
    </section>
  );
};

export default LoginModal;
