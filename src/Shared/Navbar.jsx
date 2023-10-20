import ActiveLink from "../components/ActiveLink/ActiveLink";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // Nav Options are here
  const navItems = (
    <>
      <ActiveLink className="text-[var(--primary-text)]" to={"/"}>
        Home{" "}
      </ActiveLink>
      <ActiveLink className="text-[var(--primary-text)] " to={"/about"}>
        About Us
      </ActiveLink>
      <ActiveLink className="text-[var(--primary-text)] " to={"/classes"}>
        Classes
      </ActiveLink>
      <ActiveLink className="text-[var(--primary-text)] " to={"/instructors"}>
        Instructors
      </ActiveLink>
      <ActiveLink className="text-[var(--primary-text)] " to={"/schedule"}>
        Schedule
      </ActiveLink>
      <ActiveLink className="text-[var(--primary-text)] " to={"/blog"}>
        Blog
      </ActiveLink>
      <ActiveLink className="text-[var(--primary-text)] " to={"/contact"}>
        Contact Us
      </ActiveLink>
      {user && (
        <ActiveLink className="text-[var(--primary-text)] " to={"/dashboard"}>
          Dashboard
        </ActiveLink>
      )}
    </>
  );

  return (
    <div className="navbar max-w-screen-xl mx-auto justify-between sticky top-0 bg-base-100 shadow-xl lg:px-10 md:px-5 sm:px-2 z-50">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-2 -ml-2 z-[1] p-2 shadow gap-1 font-bold bg-white rounded"
          >
            {navItems}
          </ul>
        </div>
        <img src={logo} alt="Unity Yoga Studio" className="md:w-60 w-40" />
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 items-center font-bold">
          {navItems}
        </ul>
      </div>

      <div>
        {user ? (
          <button
            onClick={logOut}
            className="border-2 border-[var(--secondary-color)] rounded-full bg-gray-200 text-[var(--secondary-color)] py-1 px-2 text-sm font-bold"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login" className="font-bold">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
