import React, { useEffect } from "react";
import styles from "./Carousel.module.css"
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation"
import CarouselRightNavigation from  "./CarouselRightNavigation/CarouselRightNavigation"

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(() =>{
        swiper.slideTo(0)
    } ,[data])
    return <></>
}


export default function Carousel({data , renderComponent}){
    return(
        <div className={styles.wrapper}>
             <Swiper
      // install Swiper modules
      styles={{padding : "0px 20px"}}
      initialstate={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
     allowTouchMove
    >
        <Controls data={data} />
        <CarouselRightNavigation />
        <CarouselLeftNavigation />
        {data.map((ele ,idx) => (
            <SwiperSlide key={idx}>{renderComponent(ele)}</SwiperSlide>
        ))}
    </Swiper>
        </div>
    )
}