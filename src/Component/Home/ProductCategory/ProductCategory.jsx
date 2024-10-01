import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import catImg1 from "../../../assets/home/slide1.jpg";
import catImg2 from "../../../assets/home/slide2.jpg";
import catImg3 from "../../../assets/home/slide3.jpg";
import catImg4 from "../../../assets/home/slide4.jpg";
import catImg5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../SectionTitle/SectionTitle";

// import required modules

const ProductCategory = () => {
  return (
    <>
      <section>
        <SectionTitle subHeading="From 10 am to 10 PM" heading="Order online" />
        <Swiper
          slidesPerView={4.5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="productCategory"
        >
          <SwiperSlide>
            <img src={catImg1} alt="imag1" />
            <h3 className="text-2xl uppercase -mt-20 text-white text-center">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={catImg2} alt="imag2" />
            <h3 className="text-2xl uppercase -mt-20 text-white text-center">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={catImg3} alt="imag3" />
            <h3 className="text-2xl uppercase -mt-20 text-white text-center">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={catImg4} alt="imag4" />
            <h3 className="text-2xl uppercase -mt-20 text-white text-center">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={catImg5} alt="imag5" />
            <h3 className="text-2xl uppercase -mt-20 text-white text-center">
              Salad
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default ProductCategory;
