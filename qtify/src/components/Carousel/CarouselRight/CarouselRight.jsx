import React, {useEffect, useState} from 'react';
import {useSwiper} from "swiper/react";
import styles from "../CarouselRight/CarouselRight.module.css";
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";

function CarouselRight(){
    const swiper= useSwiper();
    const[isEnd,setEnd]= useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setEnd(swiper.isEnd);
        })
    },[swiper]);

    return(
        <div className={styles.RightNavigation}>
                {!isEnd && <RightArrow onClick={()=>swiper.slideNext()} />}
        </div>
    )
}

export default CarouselRight;