import { useState } from "react"
import { BsSearch } from "react-icons/bs";


const types = ["buy", "rent"];

export default function Searchbar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    });

    const switchType = (val) => {
        setQuery(prev => ({ ...prev, type: val }));
    }
    return (
        <div className="">
            <div className="">
                {
                    types.map(type => {
                        return (<button key={type} className={`px-7 py-3 border border-[#a5abb4] border-b-0 capitalize ${query.type === type ? "text-[#f0ebd8] bg-[#1d2d44]" : ""} first:rounded-tl-md first:border-r-0 last:rounded-tr-md last:border-l-0`} onClick={()=>switchType(type)}>{type}</button>)
                    })
                }
            </div>
            <form action="" className="flex flex-col md:flex-row justify-between border border-[#a5abb4] h-16">
                <input type="text" name="location" placeholder="Where" className="w-40 flex-auto px-2"/>
                <input type="number" name="minPrice" placeholder="Min Price" min={0} max={1000000000} className="w-20 flex-auto px-2"/>
                <input type="number" name="maxPrice" placeholder="Max Price" min={0} max={1000000000} className="w-20 flex-auto px-2"/>
                <button className="flex justify-center items-center px-4 text-3xl text-[#f0ebd8] bg-[#1d2d44] flex-1 max-w-20"><BsSearch/></button>
            </form>
        </div>
    )
}