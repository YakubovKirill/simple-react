import './Header.css'
import {useDispatch, useSelector} from 'react-redux'
import { signIn } from '../../redux/actions'

export default function Header() {
    return (
        <header>
            <div className="container f-c">
                <div className="logo-img"></div>
                <div className="text-block company-name"><p>Company name</p></div>
            </div>
            <UserInfo />
        </header>
    )
}

function UserInfo(props) {
    const isLogin = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    
    return (
        <div className="container f-c">
            {isLogin ? 
                <div className="user-info f-c">
                    <div className="m-r-20 f-c">
                    <div className="text-block username"><p>User name</p></div>
                        <button className="green-btn" onClick={() => dispatch(signIn())}>Logout</button>
                    </div>
                    <div className="user-img"></div>
                </div>
                : <button className="green-btn" onClick={() => dispatch(signIn())}>Login</button>
            }
        </div>
    )
}