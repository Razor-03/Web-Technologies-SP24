import { Link } from "react-router-dom";
export default function Card({item}) {
    return (
        <div className="flex">
            <Link to={`${item.id}`} className="basis-2/5 h-48">
                <img src={item.img} alt="" className="w-full h-full object-cover rounded-md"/>
            </Link>
            <div className="basis-3/5"></div>
        </div>
    );
}