import { useState } from 'react'
import './Header.css'

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
    const [isLogin, setIsLogin] = useState(false)
    const changeLogin = () => {
        setIsLogin(!isLogin)
    }
    return (
        <div className="container f-c">
            {isLogin ? 
                <div className="user-info f-c">
                    <div className="m-r-20 f-c">
                    <div className="text-block username"><p>User name</p></div>
                        <button className="green-btn" onClick={changeLogin}>Logout</button>
                    </div>
                    <div className="user-img"></div>
                </div>
                : <button className="green-btn" onClick={changeLogin}>Login</button>
            }
        </div>
    )
}