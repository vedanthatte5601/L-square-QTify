// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Carousel.module.css';

// Import Swiper styles
import 'swiper/css';
import CarouselLeft from './CarouselLeft/CarouselLeft';
import CarouselRight from './CarouselRight/CarouselRight';
import { useEffect } from 'react';
// import 'swiper/css/navigation';

const Controls = ({data})=>{
   const swiper = useSwiper();
   useEffect(()=>{
      swiper.slideTo(0);
   },[data , swiper]);
   return(<></>);
}


function Carousel({data, renderComponent}){
    return(
       <div className={styles.wrapper}>
         <Swiper 
      // install Swiper modules
      style={{padding:"0px 20px"}}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
    >
      <Controls data={data} />
      <CarouselLeft />
      <CarouselRight />
    {data.map((element)=>(
     <SwiperSlide className={styles.slide} key={element.id}>{renderComponent(element)}</SwiperSlide>   
    ))}
      
    </Swiper>
       </div>
    );
}

export default Carousel;