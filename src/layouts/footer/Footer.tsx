import React from "react";
import styles from "./Footer.module.scss";
import facebook from "../../assets/images/footer/social-media-icons/facebook.svg";
import twitter from "../../assets/images/footer/social-media-icons/twitter.svg";
import instagram from "../../assets/images/footer/social-media-icons/instagram.svg";
import sections from "../../constants/footerSections.constant";
import Button from "../../components/shared/Button/MainButton";
import logo_light from "../../assets/images/site-logo/logo_light.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.footer_top}>
        <div className="container">
          <div className={styles.footer}>
            <div className={styles.footer_info}>
              <Link to={"/"}>
                <img src={logo_light} alt="footer-logo" />
              </Link>
              <p className={styles.info_subtitle}>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so
              </p>
              <div className={styles.footer_icons}>
                <a className={styles.social_media_icon}>
                  <img src={facebook} alt="facebook" />
                </a>
                <a className={styles.social_media_icon}>
                  <img src={twitter} alt="twitter" />
                </a>
                <a className={styles.social_media_icon}>
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
            <div className={styles.category}>
              <h2 className={styles.category_title}>Posing</h2>
              <ul className={styles.navlinks_lists}>
                {sections
                  .find((section) => section.category === "Posing")
                  ?.items.map((item, idx) => (
                    <li key={idx} className={styles.nav_item}>
                      <a className={styles.footer_link} href={item.path}>
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div className={styles.category}>
              <h2 className={styles.category_title}>Company</h2>
              <ul className={styles.navlinks_lists}>
                {sections
                  .find((section) => section.category === "Company")
                  ?.items.map((item, idx) => (
                    <li key={idx} className={styles.nav_item}>
                      <a className={styles.footer_link} href={item.path}>
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div className={styles.subscribe_us}>
              <h2 className={styles.subscribe_title}>Subscribe us</h2>
              <p className={styles.subcribe_subtitle}>
                Get Business news, tip and solutions to your problems from our
                experts.
              </p>
              <form className={styles.contact_form}>
                <div className={styles.contact_email}>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email
"
                    required
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    text="Subscribe"
                    className={styles.contact_btn}
                  ></Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className="container">
          <div className={styles.footer_bottom_text}>
            Copyright 2022. Created by Thememarch.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
