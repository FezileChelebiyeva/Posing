import React from "react";
import styles from "./QuestionsSection.module.scss";
import faqImg from "../../../../assets/images/home/questions-section/faq_img.png";
import QuestionsCollapse from "./questions-collapse/QuestionsCollapse";

const QuestionsSection = () => {
  return (
    <section id={styles.questions_section}>
      <div className="container">
        <div className={styles.questions_section}>
          <div className={styles.section_head}>
            <p className={styles.first_title}>POS FAQ</p>
            <h1 className={styles.section_title}>Frequently asked questions</h1>
          </div>

          <div className={styles.questions_content}>
            <div className={styles.section_image}>
              <img src={faqImg} alt="questions" />
            </div>
            <div className={styles.questions_accordion}>
            <QuestionsCollapse/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
