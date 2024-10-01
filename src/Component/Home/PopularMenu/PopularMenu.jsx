import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuItem from "../../MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populatItem = data.filter((item) => item.category === "popular");
        setMenu(populatItem);
      });
  }, []);
  return (
    <>
      <section className="mb-12 mt-14">
        <SectionTitle subHeading="From Menu" heading="Popular Item" />

        <div className="grid md:grid-cols-2 gap-10">
          {menu.map((item) => {
            return <MenuItem key={item._id} item={item}></MenuItem>;
          })}
        </div>
      </section>
    </>
  );
};

export default PopularMenu;
