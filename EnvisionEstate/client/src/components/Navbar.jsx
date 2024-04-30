import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [ menuDisplay, setMenuDisplay ] = useState(false);

    const toggleMenu = () => {
        setMenuDisplay(!menuDisplay);
    }

    return (
        <nav className="text-sm sm:text-base h-20 flex justify-between items-center">
            <div className="basis-3/5 flex gap-x-4 xl:gap-x-10 items-center h-full">
                <a href="/" className="flex items-center">
                    <img src="eLogo.png" alt="E" className="inline w-14" />
                    <span className="font-bold text-base sm:text-lg inline md:hidden lg:inline">EnvisionEstate</span>
                </a>
                <a href="" className="hidden md:inline">Home</a>
                <a href="" className="hidden md:inline">Browse</a>
                <a href="" className="hidden md:inline">About</a>
                <a href="" className="hidden md:inline">Contact Us</a>
            </div>
            <div className="basis-2/5 flex bg-[#f0ebd8] justify-end items-center gap-x-2 sm:gap-x-10 h-full ">
                <a href="" className="hidden md:inline">Log In</a>
                <a href="" className="bg-[#3e5c76] text-[#f0ebd8] py-1 px-3 rounded-md">Sign Up</a>
                <div className="z-10" onClick={toggleMenu}>
                    <FaBars className={`md:hidden ${menuDisplay ? "text-white" : "text-black"}`} />
                </div>
                <div className={`bg-black text-[#f0ebd8] absolute top-0 h-screen w-[50%] flex flex-col items-center justify-center gap-y-12 transition-all ease-linear duration-300 ${menuDisplay ? "right-0" : "right-[-50%]"}`}>
                    <a href="" className="">Home</a>
                    <a href="" className="">Browse</a>
                    <a href="" className="">About</a>
                    <a href="" className="">Contact Us</a>
                    <a href="" className="">Login</a>
                    <a href="" className="">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}