import { Link } from "react-router-dom";
import '../pages/css/nav.css'

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <Link to='/'><li> Home </li></Link>
                    <Link to='/menu'><li> Menu </li></Link>
                    <Link to= '/login'><li> Log In </li></Link>
                    <Link to='/location'><li>Hours & Location</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav