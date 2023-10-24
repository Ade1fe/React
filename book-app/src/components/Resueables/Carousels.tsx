
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import pic1 from "../../assets/images/img1-PhotoRoom.png-PhotoRoom.png"
import pic2 from "../../assets/images/img2-PhotoRoom.png-PhotoRoom.png"

import { Pagination } from 'swiper/modules';

export default function Carousels() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={pic1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={pic2} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}


