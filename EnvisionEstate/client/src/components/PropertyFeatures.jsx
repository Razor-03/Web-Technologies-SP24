import { FaTools, FaBath, FaBed, FaDollarSign } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { BsChatLeftText } from "react-icons/bs";
import { IoBookmarkOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { singlePostData } from "../lib/dummyData";
import Map from "../components/Map";

export default function PropertyFeatures() {
    return (
        <div className="flex flex-col gap-6">
            <p className="font-semibold text-lg">General</p>
            <div className="listVertical flex flex-col gap-4 bg-[#fff] p-4 rounded-md">
                <div className="feature flex items-center gap-2">
                    <FaTools />
                    <div className="featureText text-sm">
                        <span className="font-semibold">Utilities</span>
                        <p>Renter is responsible</p>
                    </div>
                </div>
                <div className="feature flex items-center gap-2">
                    <MdOutlinePets />
                    <div className="featureTex text-sm">
                        <span className="font-semibold">Pet Policy</span>
                        <p>Pets Allowed</p>
                    </div>
                </div>
                <div className="feature flex items-center gap-2">
                    <FaDollarSign />
                    <div className="featureText text-sm">
                        <span className="font-semibold">Property Fees</span>
                        <p>Must have 3x the rent in total household income</p>
                    </div>
                </div>
            </div>
            <p className="font-semibold text-lg">Sizes</p>
            <div className="sizes flex justify-between gap-2">
                <div className="size flex items-center bg-[#fff] py-2 px-1 rounded-md gap-2 text-xs sm:text-sm sm:p-3">
                    <TbRulerMeasure />
                    <span>80 sq ft</span>
                </div>
                <div className="size flex items-center bg-[#fff] py-2 px-1 rounded-md gap-2 text-xs sm:text-sm sm:p-3">
                    <FaBed />
                    <span>2 bedrooms</span>
                </div>
                <div className="size flex items-center bg-[#fff] py-2 px-1 rounded-md gap-2 text-xs sm:text-sm sm:p-3">
                    <FaBath />
                    <span>1 bathrooom</span>
                </div>
            </div>
            <p className="font-semibold text-lg">Nearby Places</p>
            <div className="listHorizontal flex justify-between gap-4 bg-[#fff] p-4 rounded-md">
                <div className="feature flex items-center gap-2">
                    <FaTools />
                    <div className="featureText text-xs sm:text-sm">
                        <span className="font-semibold">School</span>
                        <p>250m away</p>
                    </div>
                </div>
                <div className="feature flex items-center gap-2">
                    <MdOutlinePets />
                    <div className="featureTex text-xs sm:text-sm">
                        <span className="font-semibold">Bus Stop</span>
                        <p>100m away</p>
                    </div>
                </div>
                <div className="feature flex items-center gap-2">
                    <FaDollarSign />
                    <div className="featureText text-xs sm:text-sm">
                        <span className="font-semibold">Restaurant</span>
                        <p>200m away</p>
                    </div>
                </div>
            </div>
            <p className="font-semibold text-lg">Location</p>
            <div className="mapContainer w-full min-h-48 z-10">
                <Map items={[singlePostData]} />
            </div>
            <div className="buttons flex justify-between text-sm sm:text-base">
                <button className="flex items-center p-4 bg-white rounded-md gap-2">
                    <BsChatLeftText />
                    Send a Message
                </button>
                <button className="flex items-center p-4 bg-white rounded-md gap-2">
                    <IoBookmarkOutline/>
                    Save
                </button>
            </div>
        </div>
    );
}