import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Main;
