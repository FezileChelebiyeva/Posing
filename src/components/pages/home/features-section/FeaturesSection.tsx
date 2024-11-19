import React from "react";
import styles from "./FeaturesSection.module.scss";
import features_cards from "../../../../fake-apis/features";
import ScrollAnimation from "../../../shared/Animations/ScrollAnimation/ScrollAnimation";
const FeaturesSection = () => {
  return (
    <section id="features" className={styles.features_section_all}>
      <div className="container">
        <div className={styles.features_section}>
          <div className={styles.section_head}>
            <ScrollAnimation>POS Features</ScrollAnimation>
            <h1 className={styles.section_title}>Available features</h1>
          </div>
          <div className={styles.features_cards_container}>
            {features_cards.map((card: any, idx: number) => {
              return (
                <div key={idx} className={styles.features_card}>
                  <div className={styles.shadow}>
                    <div className={styles.icon_image}>
                      <img src={card.icon_image} alt="" />
                    </div>
                  </div>
                  <div className={styles.card_detail}>
                    <h3 className={styles.card_title}>{card.title}</h3>
                    <p className={styles.card_description}>
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
