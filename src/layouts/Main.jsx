import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import BackToTop from "../Shared/BackToTop";
import Navbar from "../Shared/Navbar";

const Main = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Main;
