import "../pages/css/menu.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import logo from "../assets/logo.png";
import menuPhoto from "../assets/menuPhoto.jpg";
import menuBurger from "../assets/menuBurger.jpg";
import mussels from "../assets/mussels.jpg";
import pickles from "../assets/pickles.jpg";
import alfredo from "../assets/alfredo.jpg";
import menu from "../assets/menu.png";

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
      <section>
      <div className="milkyMenu">
        <img src={menu}></img>
      </div>

      <a target="_blank" href="https://buy.stripe.com/test_fZeeYp5g01CleLS288">
        <div className="mannyMussels">
          <h2>Manny's Mussels $18</h2>
        </div>

        <div className="mussels">
          <img src={mussels}></img>
        </div>

        <div className="musselsDesc">
          <p>
            {" "}
            Manny's Mussels, steamed to tender perfection{" "}
          </p>
          <p>
          and served with our
            renowned Manny Muscle Sauce.
          </p>
        </div>
      </a>

      <a target="_blank" href="https://buy.stripe.com/test_8wMaI923O2Gp9ry9AB">
        <div className="bodBurger">
          <h2>Bodacious Burger $15</h2>
        </div>

        <div className="menuBurger">
          <img src={menuBurger}></img>
        </div>

        <div className="bodBurgDesc">
          <p>
            {" "}
            Bodacious Burger. Sink your teeth into a perfectly seasoned beef
            patty, enhanced by our delectable Muscle Sauce{" "}
          </p>
        </div>
      </a>

      <a target="_blank" href="https://buy.stripe.com/test_5kA6rTfUEa8ReLS6oq">
        <div className="plump">
          <h2>Plump Pickles $4</h2>
        </div>

        <div className="pickles">
          <img src={pickles}></img>
        </div>

        <div className="pickleDesc">
          <p>
            {" "}
            Satisfy your cravings with our Plump Pickles. Pickled to perfection
            and paired with our signature Muscle Sauce.{" "}
          </p>
        </div>
      </a>
      <a target="_blank" href="https://buy.stripe.com/test_eVa03veQA80J5bidQT">
        <div className="alfredo">
          <h2>Alfredo $17</h2>
        </div>

        <div className="alfredoImg">
          <img src={alfredo}></img>
        </div>

        <div className="alfredoDisc">
          <p>
            {" "}
            Our Alfredo Pasta enriched with the irresistible flavor of our
            signature Muscle Sauce. Our creamy Alfredo sauce, delicately
            crafted, perfectly complements the rich notes of the Muscle Sauce.
          </p>
        </div>
      </a>
      </section>
    </div>
  );
}
export default Menu;
