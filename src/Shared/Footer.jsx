import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    // <footer className="footer grid-rows-2 p-10 mt-12 bg-gray-900 text-[#eee]">

    <footer className="  bg-gray-900 text-[#eee] pb-4">
      <div className="flex justify-between md:px-10 md:pt-16 py-8 px-2">
        {/* logo and social icon container */}
        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-center  w-full">
            <img className="w-56" src="/src/assets/logo.png" alt="..." />
          </div>
          <div className="flex flex-col items-center gap-2 w-full">
            <div>
              <header className="text-center text-xl font-bold pt-2 text-[var(--main-color)] opacity-80">
                --- Follow Us ---
              </header>
              <div className="flex items-center gap-4 justify-center">
                <a className="transition-transform" href="#">
                  <FaFacebookSquare
                    size={38}
                    className="transition-all hover:text-[var(--main-color)]"
                  />
                </a>
                <a className="transition-transform" href="#">
                  <AiFillInstagram
                    size={38}
                    className="transition-all hover:text-[var(--main-color)]"
                  />
                </a>
                <a className="transition-transform" href="#">
                  <AiOutlineTwitter
                    size={38}
                    className="transition-all hover:text-[var(--main-color)]"
                  />
                </a>
                <a className="transition-transform" href="#">
                  <AiFillYoutube
                    size={38}
                    className="transition-all hover:text-[var(--main-color)]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* important links */}
        <nav>
          <header className="footer-title text-[var(--main-color)] opacity-80">
            Services
          </header>
          <a className="link link-hover block">Yoga Classes</a>
          <a className="link link-hover block">Meditation Sesions</a>
          <a className="link link-hover block">Workshops & Retreats</a>
          <a className="link link-hover block">Private Sessions</a>
          <a className="link link-hover block">Yoga Teacher Training</a>
        </nav>
        <nav>
          <header className="footer-title text-[var(--main-color)] opacity-80">
            Classes
          </header>
          <a className="link link-hover block">Hatha Yoga</a>
          <a className="link link-hover block">Vinasa Flow</a>
          <a className="link link-hover block">Ashtanga Yoga</a>
          <a className="link link-hover block">Yin Yoga</a>
          <a className="link link-hover block">Mediation & Mindfulness</a>
        </nav>
        <nav>
          <header className="footer-title text-[var(--main-color)] opacity-80">
            Explore
          </header>
          <a className="link link-hover block">Classes</a>
          <a className="link link-hover block">Blogs</a>
          <a className="link link-hover block">Book a Class</a>
          <a className="link link-hover block">Contact Us</a>
          <a className="link link-hover block">About Us</a>
          <a className="link link-hover block">Schedule</a>
        </nav>
        <nav>
          <header className="footer-title text-[var(--main-color)] opacity-80">
            Legal
          </header>
          <a className="link link-hover block">Terms of use</a>
          <a className="link link-hover block">Privacy policy</a>
          <a className="link link-hover block">Cookie policy</a>
        </nav>
      </div>
      <div className="text-center border-t pt-2 border-[var(--main-color)] text-slate-300">
        <span>
          All Content &#169; Copyright Unity Yoga Studio 2023. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
