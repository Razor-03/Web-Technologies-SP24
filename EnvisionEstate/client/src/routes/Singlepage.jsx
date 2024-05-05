import PropertyFeatures from "../components/PropertyFeatures";
import PropertyInfo from "../components/PropertyInfo";
import Slider from "../components/Slider";
import { singlePostData } from "../lib/dummyData";

export default function Singlepage() {
    return (
        <div className="flex flex-col h-full lg:flex-row">
            <div className="basis-3/5 details block lg:flex">
                <div className="lg:pr-24 flex flex-row justify-center gap-y-12 h-full">
                    <div className="basis-11/12">
                        <Slider images={singlePostData.images} />
                        <PropertyInfo post={singlePostData} />
                    </div>
                    {/* <div className="basis-1/5"></div> */}
                </div>
            </div>
            <div className="basis-2/5 bg-[#f0ebd8] rounded-sm lg:mt-0 py-4">
                <div className="flex flex-col px-6 gap-y-12 h-full">
                    <PropertyFeatures />
                </div>
            </div>
        </div>
    )
}