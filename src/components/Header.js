import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [isLogin, setIsLogin] = useState(true);
    const isOnlineStatus = useOnlineStatus();

    return (<div className='header'>
        <img className='logo'  src={LOGO_URL} alt='app-logo'/>
        <ul>
            <li>
                Online Status: {isOnlineStatus ? '🫱🏻‍🫲🏻': '⭕'}
            </li>
            <li>
                <Link to={'/'}>HOME</Link>
            </li>
            <li>
                <Link to={'about'}>About Us</Link>
            </li>
            <li>
                <Link to={'/grocery'}>Grocery</Link>
            </li>
            <li>
                <Link to={'contact'}>Contact Us</Link>
            </li>
            <button className="login-btn" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'LogIn' : 'Logout'}
            </button>
        </ul>
    </div>)
}

export default Header;