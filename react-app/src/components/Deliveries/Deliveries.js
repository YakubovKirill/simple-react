import './Deliveries.css'

export default function Deliveries() {
    // This variable store items from database. Thus data is test data
    const items = [{
        name: 'Delivery 1',
        type: 'Todo List'
    },
    {
        name: 'Delivery 2',
        type: 'URL'
    }
]
    return (
        <div id="deliveries-list">
            <div className="connected">
                <table>
                    <thead className="table-header">
                        <tr>
                            <td>Delivery name</td>
                            <td>Delivery type</td>
                        </tr>
                    </thead>
                    <DeliveryItems items={items} />
                </table>
            </div>
        </div>
    )
}

function DeliveryItem(props) {
    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.type}</td>
            <td><button className="green-btn">Edit</button></td>
            <td><button className="red-btn">Delete</button></td>
        </tr>
    )
}

function DeliveryItems(props) {
    const deliveryItems = props.items
    const getItems = (delivItems) => {
        const items = []
        for(let elem in delivItems) {
            const item = <DeliveryItem key={elem} item={delivItems[elem]} />
            items.push(item)
        }
        return items
    }
    return (
        <tbody>
            {getItems(deliveryItems)}
        </tbody>
    )
}