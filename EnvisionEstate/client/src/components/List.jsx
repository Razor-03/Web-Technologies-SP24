import { listData } from '../lib/dummyData';
import Card  from '../components/Card';

export default function List() {
    return (
        <div className="list flex flex-col gap-12">
            {
                listData.map(item => {
                    return <Card key={item.id} item={item} />
                })
            }
        </div>
    )
}