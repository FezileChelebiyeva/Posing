import styles from "./QuestionsSection.module.scss";
import faqImg from "../../../../assets/images/home/questions-section/faq_img.png";
import QuestionsCollapse from "./questions-collapse/QuestionsCollapse";
import ScrollAnimation from "../../../shared/Animations/ScrollAnimation/ScrollAnimation";
import ScrollAnimationImg from "../../../shared/Animations/ScrollAnimationImg/ScrollAnimationImg";

const QuestionsSection = () => {
  return (
    <section id="faq" className={styles.questions_section_all}>
      <div className="container">
        <div className={styles.questions_section}>
          <div className={styles.section_head}>
            <ScrollAnimation>POS FAQ</ScrollAnimation>
            <h1 className={styles.section_title}>Frequently asked questions</h1>
          </div>

          <div className={styles.questions_content}>
            <div className={styles.section_image}>
              <ScrollAnimationImg>
                <img src={faqImg} alt="questions" />
              </ScrollAnimationImg>
            </div>
            <div className={styles.questions_accordion}>
              <QuestionsCollapse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
