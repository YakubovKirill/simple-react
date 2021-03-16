import './NewDelivery.css'
function NewDelivery() {
    return (
        <div id="new-delivery-section">
                <div className="new-deliv-header"><p>New delivery</p></div>
                <div className="connected">
                    <div className="input-wrap">
                        <input type="text" name="delivery-name" id="delivery-name" />
                        <select name="delivery-type" id="delivery-type">
                            <option value="Option_1">Option 1</option>
                            <option value="Option_2">Option 2</option>
                            <option value="Option_3">Option 3</option>
                            <option value="Option_4">Option 4</option>
                        </select>
                    </div>
                    <div className="button-wrap">
                        <button className="green-btn m-r-20">Test</button>
                        <button className="green-btn">Save</button>
                    </div>
                </div>
        </div>
    )
}

export default NewDelivery