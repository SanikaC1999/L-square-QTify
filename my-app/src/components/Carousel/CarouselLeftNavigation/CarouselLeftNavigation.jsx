import React, { useEffect, useState } from "react";
import styles from "./CarouselLeftNavigation.module.css"
import {ReactComponent as LeftArrow} from "../../../assets/left.svg"
import { useSwiper } from "swiper/react";


export default function CarouselLeftNavigation(){
    const swiper = useSwiper();
    const [isBeginning , setisBeginning] = useState(swiper.isBeginning);
    useEffect(() =>{
        swiper.on("slideChange" , function() {
            setisBeginning(swiper.isBeginning)
        })
    } ,[])
    return(
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    )
}