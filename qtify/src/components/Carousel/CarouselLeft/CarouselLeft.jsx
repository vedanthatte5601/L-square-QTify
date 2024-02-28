import React, {useEffect, useState} from 'react';
import {useSwiper} from "swiper/react";
import styles from "../CarouselLeft/CarouselLeft.module.css";
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";

function CarouselLeft(){
    const swiper= useSwiper();
    const[isBeginning,setBeginning]= useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setBeginning(swiper.isBeginning);
        })
    },[swiper]);

    return(
        <div className={styles.LeftNavigation}>
                {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()} />}
        </div>
    )
}

export default CarouselLeft;

