import React from "react";
import styles from "./NewsSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import latest_news from "../../../../fake-apis/latest_news";
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineArrowRight,
} from "react-icons/ai";

const NewsSection = () => {
  return (
    <section id={styles.latest_news_section}>
      <div className="container">
        <div className={styles.latest_news_section}>
          <div className={styles.section_head}>
            <p className={styles.first_title}>Letest News</p>
            <h1 className={styles.section_title}>Point of sale latest news</h1>
          </div>
          <div className={styles.news_slider}>
            <Swiper
              speed={1200}
              slidesPerView={4}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                },
                993: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 1.5,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              modules={[Pagination, Autoplay]}
              className={styles.mySwiper}
            >
              {latest_news.map((news: any, i: number) => {
                return (
                  <SwiperSlide key={i}>
                    <div className={styles.news_card}>
                      <div className={styles.news_image}>
                        <img src={news.image} alt="news-image" />
                      </div>
                      <div className={styles.news_details}>
                        <div className={styles.news_info}>
                          <p>
                            <AiOutlineUser color="#52C8C4" />
                            {news.sender}
                          </p>
                          <p>
                            <AiOutlineCalendar color="#52C8C4" />
                            {news.date}
                          </p>
                        </div>
                        <h2 className={styles.news_title}>{news.title}</h2>
                        <div className={styles.more_btn}>
                          <a className={styles.read_more_link} href="">
                            Read More
                          </a>
                          <AiOutlineArrowRight color="#6990ff" />
                        </div>
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

export default NewsSection;
