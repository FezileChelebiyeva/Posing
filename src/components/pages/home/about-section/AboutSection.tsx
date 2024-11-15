import React from "react";
import styles from "./AboutSection.module.scss";
import aboutImg from "../../../../assets/images/home/about-section/about_img_1.png";
import infoImg from "../../../../assets/images/home/about-section/about_img_2.png";
import iconTick from "../../../../assets/images/home/about-section/icons/tick.svg";
const AboutSection = () => {
  return (
    <section id={styles.about_section}>
      <div className="container">
        <div className={styles.about_section}>
          <div className={styles.about_image}>
            <img src={aboutImg} alt="about-image" />
          </div>
          <div className={styles.about_details}>
            <p className={styles.first_title}>About The POS</p>
            <h1 className={styles.about_title}>
              Best solution for point of sale about details
            </h1>
            <p className={styles.about_subtitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className={styles.about_subtitle}>
              Lorem Ipsum the & been the industry's. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum
              passages.
            </p>
            <div className={styles.information_section}>
              <div className={styles.left_section}>
                <div className={styles.info_card}>
                  <div className={styles.tick_icon}>
                    <img src={iconTick} alt="tick-icon" />
                  </div>
                  <div className={styles.info_text}>
                    <h3 className={styles.info_title}>
                      Other point of sale information
                    </h3>
                    <p className={styles.info_subtitle}>
                      But I must explain to you how all this mistaken in
                      denouncing pleasure and praising pain was born and I will
                      give.
                    </p>
                  </div>
                </div>
                <div className={styles.info_card}>
                  <div className={styles.tick_icon}>
                    <img src={iconTick} alt="tick-icon" />
                  </div>
                  <div className={styles.info_text}>
                    <h3 className={styles.info_title}>
                      Best process system POS
                    </h3>
                    <p className={styles.info_subtitle}>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti at.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.right_section}>
                <img src={infoImg} alt="information" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
