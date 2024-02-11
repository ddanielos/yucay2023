'use client'

import BlogItem from './BlogItem';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//import 'swiper/css/navigation'; // import navigation styles
//import 'swiper/css/pagination'; // import pagination styles

const Bypass = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const renderBlogItemsMobile = () => {
    return data.slice(0, 3).map(item => (
      <SwiperSlide key={item.id} className="flex justify-center items-center w-3/5">
        <BlogItem {...item} />
      </SwiperSlide>
    ));
  };
  const renderBlogItemsDesktop = () => {
    return data.slice(0, 3).map(item => (
        <BlogItem key={item.id} {...item} />
    ));
  };

  if (isMobile) {
    return (
      <Swiper
        slidesPerView={1.25}
        spaceBetween={10}
        centeredSlides={true}
        className='w-full h-full'
      >
        {renderBlogItemsMobile()}
      </Swiper>
    );
  } else {
    return (
      <div className='md:pt-[10px] flex w-full justify-around'>
        {renderBlogItemsDesktop()}
      </div>
    );
  }
};

export default Bypass;
