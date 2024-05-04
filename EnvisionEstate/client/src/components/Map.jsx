import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Pin from './Pin';

export default function Map({ items }) {
    return (
        <MapContainer center={[51.55, -0.09]} zoom={7} scrollWheelZoom={false} className='w-full h-screen rounded-md'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                items.map(item => {
                    return <Pin item={item} key={item.id} />
                })
            }
        </MapContainer>
    )
}