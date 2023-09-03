import { useEffect, useState } from "react";
import ActiveLink from "../components/ActiveLink/ActiveLink";
import logo from '../assets/logo.png'


const Navbar = () => {

    // Nav Options are here
    const navItems = <>
        <ActiveLink><a className="text-[var(--primary-text)] ">Home</a></ActiveLink>
        <ActiveLink><a className="text-[var(--primary-text)] ">About Us</a></ActiveLink>
        <ActiveLink><a className="text-[var(--primary-text)] ">Classes</a></ActiveLink>
        <ActiveLink><a className="text-[var(--primary-text)] ">Instructors</a></ActiveLink>
        <ActiveLink><a className="text-[var(--primary-text)] ">Schedule</a></ActiveLink>
        <ActiveLink><a className="text-[var(--primary-text)] ">Blog</a></ActiveLink>
        <ActiveLink><a className="text-[var(--primary-text)] ">Contact Us</a></ActiveLink>
    </>

    // navbar fixed in top position
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarClasses = `navbar fixed top-0 left-0 w-full bg-base-100 shadow-2xl lg:px-10 md:px-5 sm:px-2 ${ isScrolled ? "z-[50]" : "" }`;

    return (
        <div className={navbarClasses}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-1">
                        {navItems}
                    </ul>
                </div>
                <img src={logo} width={"250px"} alt="Unity Yoga Studio" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3 items-center">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;