import "../pages/css/menu.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import logo from "../assets/logo.png";
import menuPhoto from "../assets/menuPhoto.jpg";
import menuBurger from "../assets/menuBurger.jpg";
import mussels from '../assets/mussels.jpg';
import pickles from '../assets/pickles.jpg';
import alfredo from '../assets/alfredo.jpg'
import menu from "../assets/menu.png"

function Menu() {
  return (
    <div>
      <Link to="/">
        <div className="menuSection">
          <img className="menuLogo" src={logo}></img>
        </div>
      </Link>
      <div className="BurgPhoto">
        <img src={menuPhoto}></img>
      </div>
      <Nav />

      <div className="milkyMenu">
      <img src={menu}></img>
      </div>

        <div className="mannyMussels">
            <h2>Manny's Mussels   $18.50</h2>
        </div>

      <div className="mussels">
        <img src={mussels}></img>
      </div>

      <div className="musselsDesc">
        <p> Manny's Mussels, steamed to tender perfection and served with our renowned Manny Muscle Sauce. </p>
      </div>

      <div className="bodBurger">
        <h2>Bodacious Burger $15.14</h2>
      </div>

      <div className="menuBurger">
        <img src={menuBurger}></img>
      </div>

      <div className="bodBurgDesc">
        <p> Bodacious Burger. Sink your teeth into a perfectly seasoned beef patty, enhanced by our delectable Muscle Sauce </p>
      </div>

      <div className="plump">
        <h2>Plump Pickles $3.23</h2>
      </div>

      <div className="pickles">
        <img src={pickles}></img>
      </div>

      <div className="pickleDesc">
        <p> Satisfy your cravings with our Plump Pickles. Pickled to perfection and paired with our signature Muscle Sauce. </p>
      </div>



    
    </div>
  );
}
export default Menu;
