import '../pages/css/menu.css'
import { Link } from "react-router-dom";
import Nav from "../components/Nav"
import logo from "../assets/logo.png";
import menuPhoto from '../assets/menuPhoto.jpg';


function Menu(){
    return(
        <div>
            <Link to='/'>

                <div className='menuSection'>
                <img className='menuLogo' src={logo}></img>
                </div>
                </Link>
                <div className='BurgPhoto'>
                <img src={menuPhoto}></img>
                </div>
            <Nav/>
        </div>
    )
}
export default Menu