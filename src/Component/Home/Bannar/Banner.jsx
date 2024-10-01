import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

export const Banner = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src={img1} alt="imag1" />
        </div>
        <div>
          <img src={img2} alt="imag2" />
        </div>
        <div>
          <img src={img3} alt="imag3" />
        </div>
        <div>
          <img src={img4} alt="imag4" />
        </div>
        <div>
          <img src={img5} alt="imag5" />
        </div>
        <div>
          <img src={img6} alt="imag6" />
        </div>
      </Carousel>
    </>
  );
};
