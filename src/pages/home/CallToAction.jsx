import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="section-container bg-[var(--primary-bg)]">
      {/* to-[var(--secondary-color)] */}
      <div className=" flex md:gap-10 flex-col md:flex-row p-4 bg-gradient-to-r from-[var(--main-color)] border-2 border-[var(--main-color)]  md:p-8 rounded-lg shadow-xl shadow-[#8f6ea7ab]">
        <div className="flex-1 mb-5">
          <h3 className="mb-4 text-4xl font-bold">
            Follow our yoga programs & <br /> challenges
          </h3>
          <div className="flex items-center gap-4 justify-start">
                <a className="transition-transform" href="#">
                <img className="opacity-70 hover:opacity-100" width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                </a>
                <a className="transition-transform" href="#">
                <img className="opacity-70 hover:opacity-100" width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
                </a>
                <a className="transition-transform" href="#">
                <img className="opacity-70 hover:opacity-100" width="48" height="48" src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1"/>
                </a>
                <a className="transition-transform" href="#">
                <img className="opacity-70 hover:opacity-100" width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
                </a>
              </div>
        </div>
        <div className="flex-1 px-4 lg:w-1/2">
          <div className="mb-5">
            <p className="about-para">
              Stay motivated with our guided programs including yoga for
              beginners, 30 day challenges, meditation courses, Yin yoga
              programs and deeper dives into yoga topics.
            </p>
          </div>
          <Link to="/" className="custom-btn-secondary">
            Explore Our Course{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
