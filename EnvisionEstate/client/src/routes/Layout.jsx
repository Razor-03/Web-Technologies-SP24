import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex flex-col max-w-[100%] md:max-w-[90%] xl:max-w-[90%] h-screen mx-auto px-[20px] text-[#0d1321]">
            <div className="">
                <Navbar />
            </div>
            <div className="h-full overflow-hidden">
                <Outlet />
            </div>
        </div>
    );
}