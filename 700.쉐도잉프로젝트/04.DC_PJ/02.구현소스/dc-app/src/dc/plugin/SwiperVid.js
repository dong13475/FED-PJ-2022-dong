import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './swipervid.css';

// import required modules
import { Navigation } from 'swiper';
// 데이터 가져오기
import swipervid_data from '../data/swipervid';

export default function SwiperVid(props) {

  const data = ["허허","호호","크크","포포","파파"];
  
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className='mySwiper'
      >
        {
          data.map((v,i)=>
          <SwiperSlide key={i}>{props.name} {v}</SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
}
