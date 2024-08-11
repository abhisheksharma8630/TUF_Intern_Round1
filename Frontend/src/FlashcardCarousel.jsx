import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './FlashcardCarousel.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Flashcard from './Flashcard';

export default function FlashcardCarousel({questions}) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          questions.map((question,idx)=>(
            <SwiperSlide key={idx}><Flashcard question={question.question} answer={question.answer} flippable={true}/></SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
