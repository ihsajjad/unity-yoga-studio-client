import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import BackToTop from "../Shared/BackToTop";

const Main = () => {
  return (
    <div>
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Main;
