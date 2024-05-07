import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuDisplay, setMenuDisplay] = useState(false);
    const user = true;

    const toggleMenu = () => {
        setMenuDisplay(!menuDisplay);
    }

    return (
        <nav className="text-base sm:text-base h-20 flex justify-between items-center">
            <div className="basis-3/5 flex gap-x-4 xl:gap-x-10 justify-between md:justify-start items-center h-full">
                <div className="z-10" onClick={toggleMenu}>
                    <FaBars className={`md:hidden ${menuDisplay ? "text-white" : "text-black"}`} />
                </div>
                <Link to={"/"} className="flex items-center">
                    <img src="eLogo.png" alt="E" className="inline w-14" />
                    <span className="font-bold text-lg inline md:hidden lg:inline">EnvisionEstate</span>
                </Link>
                <Link to={"/"} className="hidden md:inline">Home</Link>
                <Link to={"/list"} className="hidden md:inline">Browse</Link>
                <Link to={""} className="hidden md:inline">About</Link>
                <Link to={""} className="hidden md:inline">Contact Us</Link>
            </div>
            <div className="basis-2/5 flex lg:bg-[#f0ebd8] justify-end items-center gap-x-2 sm:gap-x-10 h-full ">
                {
                    user ? (
                        <>
                            <div className="user flex gap-x-4 items-center font-semibold">
                                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile-pic" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
                                <span className="hidden md:inline">John Doe</span>
                            </div>
                            <Link to="/profile" className="py-2 px-4 cursor-pointer bg-[#1d2d44] text-[#f0ebd8] me-3 relative rounded-md hidden md:inline">
                                <div className="absolute bg-[#f00] text-white rounded-full w-6 h-5 flex justify-center items-center bottom-7 left-16">3</div>
                                Profile
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to={""} className="hidden md:inline">Log In</Link>
                            <Link to={""} className="bg-[#1d2d44] text-[#f0ebd8] py-1 px-3 rounded-md">Sign Up</Link>
                        </>
                    )
                }
                <div onClick={() => setMenuDisplay(false)} className={`bg-[#0d1321] text-[#f0ebd8] absolute top-0 h-screen w-[50%] flex flex-col items-center justify-center gap-y-12 transition-all ease-linear duration-300 ${menuDisplay ? "left-0" : "left-[-50%]"}`}>
                    <Link to={""} className="">Home</Link>
                    <Link to={"/list"} className="">Browse</Link>
                    <Link to={""} className="">About</Link>
                    <Link to={""} className="">Contact Us</Link>
                    <Link to={""} className="">Login</Link>
                    <Link to={""} className="">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}