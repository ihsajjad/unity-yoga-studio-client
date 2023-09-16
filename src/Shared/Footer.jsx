import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  bg-gray-900 text-[#eee] pb-4">
      <div className="flex justify-start md:justify-center lg:justify-between gap-4 lg:gap-12 items-start flex-col lg:flex-row px-10 md:pt-16 py-8">
        {/* logo and social icon container */}
        <div className="flex flex-col justify-between self-center">
          <div className="flex items-center justify-center  w-full">
            <img className="w-56" src="/src/assets/logo.png" alt="..." />
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
      <div className="text-left border-t pt-2 border-[var(--main-color)] gap-2 text-slate-300 flex flex-col md:flex-row justify-between items-center px-2 md:px-10">
        <span className="block text-center md:lext-left">
          All Content&#169; Copyright Unity Yoga Studio 2023. All Rights
          Reserved.
        </span>
        <div className="flex items-center gap-4 justify-center">
          <a className="transition-transform" href="#">
            <FaFacebookSquare
              size={35}
              className="transition-all hover:text-[var(--main-color)] hover:text-[#1776F3]"
            />
          </a>
          <a className="transition-transform" href="#">
            <AiFillInstagram
              size={35}
              className="transition-all hover:text-[var(--main-color)] hover:text-[#EB5EC0]"
            />
          </a>
          <a className="transition-transform" href="#">
            <AiOutlineTwitter
              size={35}
              className="transition-all hover:text-[var(--main-color)] hover:text-[#1CA0F2]"
            />
          </a>
          <a className="transition-transform" href="#">
            <AiFillYoutube
              size={35}
              className="transition-all hover:text-[var(--main-color)] hover:text-[#F74128]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
