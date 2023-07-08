import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";

import "./genre.css";
import ContentSwiper from "./contentSwiper";

const Genre = () => {
  return (
    <div className="genre mt-[30px] mb-5 pe-[60px] ps-[30px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ContentSwiper img="./assets/album music/collide.jpg" genre="Pop" />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper
            img="./assets/album music/classic.jpg"
            genre="Classic"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper
            img="./assets/album music/popular.jpg"
            genre="Popular"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper img="./assets/album music/rock.jpg" genre="Rock" />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper img="./assets/album music/reggae.jpg" genre="Reggae" />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper
            img="./assets/album music/hiphop.jpg"
            genre="Hip Hop"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper
            img="./assets/album music/hiphop.jpg"
            genre="Hip Hop"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper
            img="./assets/album music/hiphop.jpg"
            genre="Hip Hop"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Genre;
