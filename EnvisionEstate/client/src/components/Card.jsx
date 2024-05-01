import { FaBath, FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoBookmarkOutline, IoLocationOutline } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";

export default function Card({ item }) {
    return (
        <div className="flex gap-x-6">
            <Link to={`${item.id}`} className="basis-2/5 h-48">
                <img src={item.img} alt="" className="w-full h-full object-cover rounded-md" />
            </Link>
            <div className="basis-3/5 flex flex-col justify-between gap-2">
                <h2 className="text-lg font-semibold text-[#253344] transition ease-linear duration-100 hover:text-[#0d1b2a] hover:scale-105">
                    <Link to={`${item.id}`}>{item.title}</Link>
                </h2>
                <p className="flex items-center gap-1 text-[#778da9]">
                    <IoLocationOutline />
                    <span className="">{item.address}</span>
                </p>
                <p className="text-lg font-light p-1 px-2 bg-[#ffe6a7] rounded-md w-max">
                    <span>$ {item.price}</span>
                </p>
                <div className="flex justify-between gap-4">
                    <div className="flex text-sm gap-10">
                        <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-md p-1">
                            <FaBed />
                            <span>{item.bedroom} bedroom</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-md p-1">
                            <FaBath />
                            <span>{item.bathroom} bathroom</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="border p-2 rounded-md hover:bg-[#ddd]"><IoBookmarkOutline /></div>
                        <div className="border p-2 rounded-md hover:bg-[#ddd]"><BsChatLeftText /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}