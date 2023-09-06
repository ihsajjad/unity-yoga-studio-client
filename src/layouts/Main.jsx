import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import BackToTop from "../Shared/BackToTop";

const Main = () => {
  return (
    <div>
      <Outlet />
      <BackToTop/>
      <Footer/>
    </div>
  );
};

export default Main;
