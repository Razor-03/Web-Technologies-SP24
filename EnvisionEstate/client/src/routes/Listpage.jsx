import Card from "../components/Card";
import Filter from "../components/Filter";
import { listData } from "../lib/dummyData";
import Map from "../components/Map";

export default function Listpage() {
    const data = listData;
    return (
        <div className="flex h-full">
            <div className="basis-1/2 lg:basis-3/5">
                <div className="lg:pr-24 flex flex-col gap-20 h-full overflow-y-scroll">
                    <Filter/>
                    {data.map(item=>{
                        return <Card key={item.id} item={item}/>
                    })}
                </div>
            </div>
            <div className="basis-1/2 lg:basis-2/5 lg:bg-[#f0ebd8]">
                <Map items={data}/>
            </div>
        </div>
    )
}