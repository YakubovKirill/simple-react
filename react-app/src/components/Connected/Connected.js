import './Connected.css'
import {useSelector} from 'react-redux'

export default function Connected() {
    const isLogin = useSelector(state => state.isLogged)

    return (
        <div id="connected-section">
            {isLogin ? (
                <div className="connected con-small">
                    <div className="con-header green"><p>Device is connected</p></div>
                    <div className="code-block"><button className="red-btn">Disconnect</button></div>
                </div>
            )
            : (
                <div className="connected">
                    <div className="con-header red"><p>Device is not connected</p></div>
                    <div className="text-block"><p>Go to _____ to get One time code</p></div>
                    <div className="code-block">
                        <input type="text" name="onetime-code" id="onetime-code" />
                        <button className="green-btn">Connect</button>
                    </div>
                </div>
            )}
        </div>
    )
}