import React from "react";
import styles from "./InventorySection.module.scss";
import inventory_cards from "../../../../fake-apis/inventoryCards";

const InventorySection = () => {
  return (
    <section id={styles.inventory_section}>
      <div className="container">
        <div className={styles.inventory_section}>
          <div className={styles.section_head}>
            <p className={styles.first_title}>Office & Inventory</p>
            <h1 className={styles.section_title}>Our best inventory</h1>
          </div>
          <div className={styles.inventory_cards_container}>
            {inventory_cards.map((card: any, idx: number) => {
              return (
                <div className={styles.inventory_card}>
                  <div className={styles.shadow}>
                    <div className={styles.icon_image}>
                      <img src={card.icon_image} alt="" />
                    </div>
                  </div>
                  <h3 className={styles.card_title}>{card.title}</h3>
                  <p className={styles.card_description}>{card.description}</p>
                  <div className={styles.card_number}>
                    {String(idx + 1).padStart(2, "0")}
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

export default InventorySection;
