import React from "react";

import styles from "./HomePageTestimonial.module.css";
import TwiterCard from "./TwiterCard/TwiterCard";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);

const HomePagetesTimonial = () => {
  const slideResposiveConfig = {
    // when window width is >= 640px
    375: {
      width: 375,
      slidesPerView: 1,
    },
    640: {
      width: 640,
      slidesPerView: 2,
    },
    768: {
      width: 768,
      slidesPerView: 2,
    },
  };
  const nav = {
    el: ".testimonial__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className}></span>`;
    },
  };

  return (
    <section className={styles.testimonial}>
      <div className="mwfit">
        <div className={styles.testimonial__head}>
          <h2>
            Prático, fácil, moderno <span>Você resolve tudo sem estresse</span>
          </h2>
        </div>
        <div className={styles.testimonial__grid}>
          <Swiper
            spaceBetween={16}
            breakpoints={slideResposiveConfig}
            tag="section"
            wrapperTag="div"
            pagination={{ ...nav }}
            className="big__slide"
          >
            <SwiperSlide>
              <TwiterCard />
            </SwiperSlide>

            <SwiperSlide>
              <TwiterCard />
            </SwiperSlide>

            <SwiperSlide>
              <TwiterCard />
            </SwiperSlide>

            <SwiperSlide>
              <TwiterCard />
            </SwiperSlide>

            <SwiperSlide>
              <TwiterCard />
            </SwiperSlide>

            <SwiperSlide>
              <TwiterCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={`${styles.pagination} testimonial__pagination`}></div>
      </div>
    </section>
  );
};

export default HomePagetesTimonial;
