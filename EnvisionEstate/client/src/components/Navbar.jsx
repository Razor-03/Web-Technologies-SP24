import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [ menuDisplay, setMenuDisplay ] = useState(false);

    const toggleMenu = () => {
        setMenuDisplay(!menuDisplay);
    }

    return (
        <nav className="text-base sm:text-base h-20 flex justify-between items-center">
            <div className="basis-3/5 flex gap-x-4 xl:gap-x-10 items-center h-full">
                <Link to={"/"} className="flex items-center">
                    <img src="eLogo.png" alt="E" className="inline w-14" />
                    <span className="font-bold text-base sm:text-lg inline md:hidden lg:inline">EnvisionEstate</span>
                </Link>
                <Link to={"/"}className="hidden md:inline">Home</Link>
                <Link to={"/list"}className="hidden md:inline">Browse</Link>
                <Link to={""}className="hidden md:inline">About</Link>
                <Link to={""}className="hidden md:inline">Contact Us</Link>
            </div>
            <div className="basis-2/5 flex lg:bg-[#f0ebd8] justify-end items-center gap-x-2 sm:gap-x-10 h-full ">
                <Link to={""}className="hidden md:inline">Log In</Link>
                <Link to={""}className="bg-[#1d2d44] text-[#f0ebd8] py-1 px-3 rounded-md">Sign Up</Link>
                <div className="z-10" onClick={toggleMenu}>
                    <FaBars className={`md:hidden ${menuDisplay ? "text-white" : "text-black"}`} />
                </div>
                <div className={`bg-[#0d1321] text-[#f0ebd8] absolute top-0 h-screen w-[50%] flex flex-col items-center justify-center gap-y-12 transition-all ease-linear duration-300 ${menuDisplay ? "right-0" : "right-[-50%]"}`}>
                    <Link to={""}className="">Home</Link>
                    <Link to={""}className="">Browse</Link>
                    <Link to={""}className="">About</Link>
                    <Link to={""}className="">Contact Us</Link>
                    <Link to={""}className="">Login</Link>
                    <Link to={""}className="">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}