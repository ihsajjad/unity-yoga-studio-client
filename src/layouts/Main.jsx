import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import BackToTop from "../Shared/BackToTop";
import Navbar from "../Shared/Navbar";

const Main = () => {
  return (
<<<<<<< HEAD
    <div className="relative pt-24">
=======
    <div>
      {/* Nav Bar */}
>>>>>>> f39d8faa84500de1e2f58d638ec97254d1e9c900
      <Navbar />
      <Outlet />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Main;
