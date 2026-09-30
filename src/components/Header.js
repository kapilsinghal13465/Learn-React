import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (<div className='header'>
        <img className='logo'  src={LOGO_URL} alt='app-logo'/>
        <ul>
            <li>
                Profile
            </li>
            <li>
                About Us
            </li>
            <li>
                Cart
            </li>
        </ul>
    </div>)
}

export default Header;