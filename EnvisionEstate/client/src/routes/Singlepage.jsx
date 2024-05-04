import ListingInfo from "../components/ListingInfo";
import Slider from "../components/Slider";
import { singlePostData } from "../lib/dummyData";

export default function Singlepage() {
    return (
        <div className="flex h-full">
            <div className="basis-3/5 details">
                <div className="lg:pr-24 flex flex-col justify-center gap-y-12 h-full">
                    <Slider images={singlePostData.images}/>
                    <ListingInfo post={singlePostData}/>
                </div>
            </div>
            <div className="basis-2/5 bg-[#f0ebd8] features">
                <div className="lg:pr-24 flex flex-col justify-center gap-y-12 h-full"></div>
            </div>
        </div>
    )
}