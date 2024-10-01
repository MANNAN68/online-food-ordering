import SectionTitle from "../../SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle subHeading="Check it out" heading="Featured Item" />
      <div className="md:flex justify-center items-center py-20 px-36 gap-14 bg-slate-500 bg-opacity-60">
        <div>
          <img src={featuredimg} alt="featuredimg" />
        </div>
        <div className="">
          <p>Aug 20, 2024</p>
          <p className="uppercase">where i can get some ?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            placeat odio esse ducimus tempore unde perspiciatis veritatis rem
            assumenda incidunt.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
