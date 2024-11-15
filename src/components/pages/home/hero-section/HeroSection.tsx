import React from "react";
import styles from "./HeroSection.module.scss";
import Button from "../../../shared/Button/MainButton";
import heroImage from "../../../../assets/images/home/hero-section/hero_img.png";
import shapes from "../../../../constants/shapes.constats";
const HeroSection = () => {
  return (
    <div id={styles.hero_section}>
      <div className="container">
        <div className={styles.hero_section}>
          <div className={styles.hero_text}>
            <p className={styles.hero_first_title}>
              Free Forever For All Users.
            </p>
            <h1 className={styles.hero_title}>Easy-to-use Point of Sale</h1>
            <p className={styles.hero_subtitle}>
              You may start selling in a matter of minutes and easy to use.
              Appropriate for all devices.
            </p>
            <Button text="Start Free Trial" className={styles.hero_btn}></Button>
          </div>
          <div className={styles.hero_image}>
            <img src={heroImage} alt="hero_image" />
          </div>
        </div>
        <div className={styles.hero_shapes}>
          {shapes.map((shape, index) => (
            <div key={index} className={styles[shape.className]}>
              <img src={shape.src} alt={shape.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;