import { Banner } from "../../Component/Home/Bannar/Banner";
import Featured from "../../Component/Home/Featured/Featured";
import PopularMenu from "../../Component/Home/PopularMenu/PopularMenu";
import ProductCategory from "../../Component/Home/ProductCategory/ProductCategory";
import Testimonial from "../../Component/Home/Testimonial/Testimonial";

export const Home = () => {
  return (
    <div>
      <Banner />
      <ProductCategory />
      <PopularMenu />
      <Featured />
      <Testimonial />
    </div>
  );
};
