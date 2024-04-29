export default function Navbar() {
    return (
        <nav className="h-20 flex justify-between items-center">
            <div className="basis-3/5 flex justify-between items-center h-full">
                <a href="/" className="flex items-center">
                    <img src="eLogo.png" alt="E" className="inline w-14"/>
                    <span className="inline md:hidden lg:inline">EnvisionEstate</span>
                </a>
                <a href="" className="hidden md:inline">Home</a>
                <a href="" className="hidden md:inline">Home</a>
                <a href="" className="hidden md:inline">Home</a>
                <a href="" className="hidden md:inline">Home</a>
            </div>
            <div className="basis-2/5 flex justify-end items-center gap-x-10 h-full ">
                <a href="" className="hidden md:inline">Log In</a>
                <a href="" className="bg-[#3e5c76] text-[#f0ebd8] py-2 px-3 rounded-md">Sign Up</a>
            </div>
        </nav>
    )
}