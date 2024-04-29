import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const {menuDisplay, setMenuDisplay} = useState(false);

    const toggleMenu = () => {
        setMenuDisplay(!menuDisplay);
        console.log(menuDisplay);
    }

    return (
        <nav className="h-20 flex justify-between items-center">
            <div className="basis-3/5 flex justify-between items-center h-full">
                <a href="/" className="flex items-center">
                    <img src="eLogo.png" alt="E" className="inline w-14" />
                    <span className="inline md:hidden lg:inline">EnvisionEstate</span>
                </a>
                <a href="" className="hidden md:inline">Home</a>
                <a href="" className="hidden md:inline">Browse</a>
                <a href="" className="hidden md:inline">About</a>
                <a href="" className="hidden md:inline">Contact Us</a>
            </div>
            <div className="basis-2/5 flex justify-end items-center gap-x-10 h-full ">
                <a href="" className="hidden md:inline">Log In</a>
                <a href="" className="bg-[#3e5c76] text-[#f0ebd8] py-1 px-3 rounded-md">Sign Up</a>
                <FaBars className="md:hidden" onClick={toggleMenu}/>
                <div className={`bg-black text-[#f0ebd8] absolute top-0 h-screen w-[50%] + ${menuDisplay ? "right-0":"right-[-50%]"}`}>
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