'use client'

import BlogItem from './BlogItem';

import { Swiper, SwiperSlide } from 'swiper/react';
//import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Carousel(props) {
  const data = props.data;
  return (
    <Swiper
      slidesPerView={1.25}
      spaceBetween={10}
      centeredSlides={true}
      className='w-full h-full'
    >
      {
        data.slice(0, 3).map(item => {
          return (
            // <h1 key={item.id}>hey</h1>
            <SwiperSlide
              key={item.id}
              className="flex justify-center items-center w-3/5"
            >
              <BlogItem {...item} />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )

}
