import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";

import "./mfu.css";
import { playlistmfu } from "../../../data/playlist";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Mfu = () => {
  return (
    <div className="mfu mt-[30px] mb-5 pe-[60px] ps-[30px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {playlistmfu.map((item) => (
          <SwiperSlide key={item.id} className=" hover:bg-[#313131]">
            <Card className="mt-6 w-[15rem] bg-[#181818] hover:bg-[#313131]">
              <CardBody>
                <div className=" relative -mt-7 mb-5">
                  <img
                    src={item.album}
                    alt=""
                    className="relative -mt-7 mb-5"
                  />
                  <div className="hover:to-bg-black-10 absolute inset-0 h-full w-full hover:bg-gradient-to-t hover:from-black/80 hover:via-black/50" />
                </div>
                <Typography variant="h6" color="white" className="-mt-3">
                  {item.nama}
                </Typography>
                <Typography className="text-[13px] ">
                  {item.deskripsi}
                </Typography>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Mfu;