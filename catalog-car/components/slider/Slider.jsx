import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import styles from "./Slider.module.scss";
// import required modules
import { Scrollbar } from "swiper";
import Image from "next/image";

export default function Slider({ photobank }) {
  console.log(photobank);
  return (
    <Swiper
      className={styles.swiper}
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
    >
      {photobank.map((item) => (
        <SwiperSlide key={item._id}>
          <Image
            src={item.url}
            width={876}
            height={719}
            alt="Description"
            priority={true}
          />
        </SwiperSlide>
        // <CarCard key={car._id} car={car} selectedBrand={selectedBrand} />
      ))}

      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
  );
}
