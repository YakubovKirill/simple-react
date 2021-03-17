import './NewDelivery.css'
function NewDelivery() {
    const deliveryTypes = ['URL', 'Todo List', 'Readwise.io']
    return (
        <div id="new-delivery-section">
                <div className="new-deliv-header"><p>New delivery</p></div>
                <div className="connected">
                    <div className="input-wrap">
                        <input type="text" name="delivery-name" id="delivery-name" />
                        <TypesSelect types={deliveryTypes}/>
                    </div>
                    <div className="button-wrap">
                        <button className="green-btn m-r-20">Test</button>
                        <button className="green-btn">Save</button>
                    </div>
                </div>
        </div>
    )
}

function TypesSelect(props) {
    const getOptions = (optionsList) => {
        const options = []
        for(let elem in optionsList) {
            const option = <Option key={elem} option={optionsList[elem]} />
            options.push(option)
        }
        return options
    }
    return (
        <select name="delivery-type" id="delivery-type">
            {getOptions(props.types)}
        </select>
    )
}

function Option(props) {
    return (
        <option value={props.option}>{props.option}</option>
    )
}

export default NewDelivery