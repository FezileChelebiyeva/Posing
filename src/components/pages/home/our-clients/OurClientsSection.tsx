import React from "react";
import styles from "./OurClientSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import client_commnets from "../../../../fake-apis/client_comments";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const OurClientsSection = () => {
  const renderStars = (rate: number) => {
    let stars = [];
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoIosStar key={`full-${i}`} size={18} color="#FFBE17" />);
    }

    if (halfStar) {
      stars.push(<IoIosStarHalf key="half" size={18} color="#FFBE17" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <IoIosStarOutline key={`empty-${i}`} size={18} color="#FFBE17" />
      );
    }

    return stars;
  };
  return (
    <section id={styles.our_clients_section}>
      <div className="container">
        <div className={styles.our_clients_section}>
          <div className={styles.section_head}>
            <p className={styles.first_title}>Testimonials</p>
            <h1 className={styles.section_title}>What our client’s say</h1>
          </div>
          <div className={styles.our_clients_comments}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 3,
                },
                993: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              modules={[Pagination]}
              className={styles.mySwiper}
            >
              {client_commnets.map((client: any, i: number) => {
                return (
                  <SwiperSlide key={i}>
                    <div className={styles.client_card}>
                      <p className={styles.client_comment}>{client.comment}</p>
                      <div className={styles.client_details}>
                        <div className={styles.client_image}>
                          <img src={client.image} alt="client-image" />
                        </div>
                        <div className={styles.client_info}>
                          <h3 className={styles.client_name}>{client.name}</h3>
                          <p className={styles.client_branch}>
                            {client.branch}
                          </p>
                          <div className={styles.rating_stars}>
                            {renderStars(client.rate)}
                          </div>
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

export default OurClientsSection;
