import Card from "../components/Card";
import Filter from "../components/Filter";
import { listData } from "../lib/dummyData"

export default function Listpage() {
    const data = listData;
    return (
        <div className="flex">
            <div className="basis-3/5">
                <div className="lg:pr-24 flex flex-col gap-20 overflow-y-scroll">
                    <Filter/>
                    {data.map(item=>{
                        return <Card key={item.id} item={item}/>
                    })}
                </div>
            </div>
            <div className="basis-2/5 lg:bg-[#f0ebd8]">2</div>
        </div>
    )
}