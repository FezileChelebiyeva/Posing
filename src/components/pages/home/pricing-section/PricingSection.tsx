import React from "react";
import styles from "./PricingSection.module.scss";
import pricing from "../../../../fake-apis/pricing";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Button from "../../../shared/Button/MainButton";

const PricingSection = () => {
  return (
    <section id="pricing" className={styles.pricing_section}>
      <div className="container">
        <div className={styles.pricing_section}>
          <div className={styles.section_head}>
            <p className={styles.first_title}>Pricing Plan</p>
            <h1 className={styles.section_title}>The best choice for you</h1>
          </div>
          <div className={styles.pricing_cards}>
            {pricing.map((element: any, idx: number) => {
              return (
                <div key={idx} className={styles.pricing_card}>
                  <div className={styles.pricing_kind}>
                    <div className={styles.kind_icon}>
                      <img src={element.icon} alt="pricing" />
                    </div>
                    <h3 className={styles.kind_name}>{element.kind}</h3>
                  </div>
                  <div className={styles.pricing_amount}>
                    <div className={styles.amount_month}>
                      <h1 className={styles.amount}>${element.amount}</h1>
                      <p className={styles.month}>/month</p>
                    </div>
                    <p className={styles.offer_free}>Get 7 Days Free Trial</p>
                  </div>
                  <ul className={styles.pricing_features}>
                    {element.features.map((el: any, idx: number) => {
                      return (
                        <li key={idx} className={styles.features_lists}>
                          {el.active ? (
                            <div className={styles.feture_row}>
                              <div className={styles.active_icon}>
                                <AiOutlineCheck
                                  color="#fff"
                                  fontSize={"14px"}
                                />
                              </div>
                              <p className={styles.active_feature}>
                                {el.feature}
                              </p>
                            </div>
                          ) : (
                            <div className={styles.feture_row}>
                              <div className={styles.deactive_icon}>
                                <AiOutlineClose
                                  color="#fff"
                                  fontSize={"14px"}
                                />
                              </div>
                              <p className={styles.deactive_feature}>
                                {el.feature}
                              </p>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <div className={styles.buy_btn}>
                    <Button text="Buy now" />
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

export default PricingSection;
