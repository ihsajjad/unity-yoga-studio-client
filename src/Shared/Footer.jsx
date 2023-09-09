import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    // <footer className="footer grid-rows-2 p-10 mt-12 bg-gray-900 text-[#eee]">
    <footer className="footer grid-rows-2  section-container bg-gray-900 text-[#eee]">
      <aside className="flex items-center justify-center h-full w-full">
        <img className="w-56" src="/src/assets/logo.png" alt="..." />
      </aside>
      <aside className="flex flex-col items-center gap-2 w-full">
        <div>
          <header className="footer-title text-[var(--main-color)] opacity-80">
            Social Media and Copyright
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
        <span>
          All Content &#169; Copyright Unity Yoga Studio 2023. All Rights
          Reserved.
        </span>
      </aside>
      <nav>
        <header className="footer-title text-[var(--main-color)] opacity-80">
          Services
        </header>
        <a className="link link-hover">Yoga Classes</a>
        <a className="link link-hover">Meditation Sesions</a>
        <a className="link link-hover">Workshops & Retreats</a>
        <a className="link link-hover">Private Sessions</a>
        <a className="link link-hover">Yoga Teacher Training</a>
      </nav>
      <nav>
        <header className="footer-title text-[var(--main-color)] opacity-80">
          Classes
        </header>
        <a className="link link-hover">Hatha Yoga</a>
        <a className="link link-hover">Vinasa Flow</a>
        <a className="link link-hover">Ashtanga Yoga</a>
        <a className="link link-hover">Yin Yoga</a>
        <a className="link link-hover">Mediation & Mindfulness</a>
      </nav>
      <nav>
        <header className="footer-title text-[var(--main-color)] opacity-80">
          Explore
        </header>
        <a className="link link-hover">Classes</a>
        <a className="link link-hover">Blogs</a>
        <a className="link link-hover">Book a Class</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Schedule</a>
      </nav>
      <nav>
        <header className="footer-title text-[var(--main-color)] opacity-80">
          Legal
        </header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
