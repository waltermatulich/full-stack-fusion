import { Link } from "react-router-dom";
import '../pages/css/nav.css'

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <Link to='/'><li> Home </li></Link>
                    <Link to='/menu'><li> Menu </li></Link>
                    <Link to= '/signup'><li> Log In </li></Link>
                    <li>Hours & Location</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav