import { LuMapPin } from "react-icons/lu";
import { userData } from "../lib/dummyData";

export default function ListingInfo ({post}) {
    return (
        <div className="info">
            <div className="top flex justify-between">
                <div className="post flex flex-col gap-2">
                    <h1 className="text-4xl font-semibold">{post.title}</h1>
                    <div className="address flex gap-1 items-center text-[#888]">
                        <LuMapPin />
                        <span>{post.address}</span>
                    </div>
                    <div className="price text-lg font-light py-2 px-3 bg-[#ffe6a7] w-fit rounded-md">
                        $ {post.price}
                    </div>
                </div>
                <div className="user flex px-12 flex-col items-center justify-center gap-4 bg-[#f0ebd8] rounded-md font-semibold">
                    <img src={userData.img} alt="" className="w-12 h-12 object-cover rounded-full" />
                    <span>{userData.name}</span>
                </div>
            </div>
            <div className="bottom text-[#555] mt-10 leading-relaxed">
                {post.description}
            </div>
        </div>
    );
}