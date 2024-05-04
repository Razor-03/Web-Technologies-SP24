import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom';

export default function Pin({ item }) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="flex gap-4">
                    <div className='w-32'>
                        <img src={item.img} alt="" className='object-cover rounded-md' />
                    </div>
                    <div className="flex flex-col justify-between">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.bedroom} bedroom</span>
                        <b>$ {item.price}</b>   
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}