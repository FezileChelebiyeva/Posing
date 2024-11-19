import React from "react";
import styles from "./StoreSection.module.scss";
import retailStore from "../../../../assets/images/home/store-section/retail-store.png";
import stores from "../../../../fake-apis/stores";
import ScrollAnimation from "../../../shared/Animations/ScrollAnimation/ScrollAnimation";
import ScrollAnimationImg from "../../../shared/Animations/ScrollAnimationImg/ScrollAnimationImg";
import ScrollAnimationRight from "../../../shared/Animations/ScrollAnimationRight/ScrollAnimationRight";
const StoreSection = () => {
  return (
    <section id={styles.store_section}>
      <div className="container">
        <div className={styles.store_section}>
          <div className={styles.section_head}>
            <ScrollAnimation>Retail Stores</ScrollAnimation>
            <h1 className={styles.section_title}>
              Perfect point of sale software for most retail stores
            </h1>
          </div>
          <div className={styles.store_contents}>
            <ScrollAnimationImg>
              <div className={styles.store_image}>
                <img src={retailStore} alt="store-image" />
              </div>
            </ScrollAnimationImg>
            <div className={styles.store_names}>
              <ScrollAnimationRight>
                <div className={styles.store_names_wrapper}>
                  {stores.map((store: any, idx: number) => {
                    return (
                      idx % 2 === 0 && (
                        <div key={idx} className={styles.store_card}>
                          <div className={styles.icon_image}>
                            <img src={store.icon_image} alt="icon-image" />
                          </div>
                          <h3>{store.title}</h3>
                        </div>
                      )
                    );
                  })}
                </div>
              </ScrollAnimationRight>
              <ScrollAnimationRight>
                <div className={styles.store_names_wrapper}>
                  {stores.map((store: any, idx: number) => {
                    return (
                      idx % 2 === 1 && (
                        <div key={idx} className={styles.store_card}>
                          <div className={styles.icon_image}>
                            <img src={store.icon_image} alt="icon-image" />
                          </div>
                          <h3>{store.title}</h3>
                        </div>
                      )
                    );
                  })}
                </div>
              </ScrollAnimationRight>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
