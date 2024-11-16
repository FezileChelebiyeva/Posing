import React from "react";
import styles from "./FactsCounterSection.module.scss";
import facts from "../../../../fake-apis/facts";
import SlotCounter from "react-slot-counter";

const FactsCounterSection = () => {
  return (
    <section id={styles.facts_counter_section}>
      <div className={styles.container_facts_section}>
        <div className={styles.facts_section}>
          <div className={styles.facts_container}>
            {facts.map((element: any, idx: number) => {
              return (
                <div key={idx} className={styles.fact_card}>
                  <div className={styles.fact_icon}>
                    <img src={element.icon_image} alt="icon-image" />
                  </div>
                  <div className={styles.fact_counter}>
                    <h1 className={styles.counter_number}>
                      <SlotCounter
                        value={
                          element.number >= 1000
                            ? String(
                                element.plus
                                  ? element.number / 1000 + "k" + "+"
                                  : element.number / 1000 + "k"
                              )
                            : element.plus
                            ? String(element.number + "+")
                            : element.number
                        }
                        
                      />
                    </h1>
                    <p className={styles.fact_title}> {element.title}</p>
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

export default FactsCounterSection;
