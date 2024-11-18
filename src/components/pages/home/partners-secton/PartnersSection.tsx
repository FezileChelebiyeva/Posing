import React from "react";
import styles from "./PartnersSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay'; 
import partners from "../../../../fake-apis/partners";

const PartnersSection = () => {
  return (
    <section id={styles.partners_section}>
      <div className="container">
        <div className={styles.partners_section}>
          <div className={styles.section_head}>
            <p className={styles.first_title}>Our Client</p>
            <h1 className={styles.section_title}>Who we partner with</h1>
          </div>
          <div className={styles.partners_slider}>
            <Swiper
              speed={1200}
              slidesPerView={6}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000, 
                disableOnInteraction: false,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 6,
                },
                993: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                },
                576: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1.4,
                },
              }}
              modules={[Pagination, Autoplay]}
              className={styles.mySwiper}
            >
              {partners.map((partner: any, i: number) => {
                return (
                  <SwiperSlide key={i}>
                    <div className={styles.partner_card}>
                        <div className={styles.partner_image}>
                          <img src={partner.image} alt="partner-image" />
                        </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
