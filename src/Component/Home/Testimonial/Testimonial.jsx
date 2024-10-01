import SectionTitle from "../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <>
      <SectionTitle subHeading="Client say" heading="Our clients fedback" />
      <Swiper navigation={true} modules={[Navigation]} className="testimonial">
        {review.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="mx-24 my-16 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{item.details}</p>
              <h3 className="text-2xl text-orange-500">{item.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonial;
