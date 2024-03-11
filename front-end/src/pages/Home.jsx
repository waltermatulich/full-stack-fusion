import "./home.css";
import logo from "../assets/logo.png";
import foodVid from '../assets/food-vid.mp4'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="hero">
        
          <Link to='/' className="logo">
          <img src={logo}></img>
          </Link>
        
      </div>


      <div>
        <video autoPlay loop muted playsInline className="foodVid">
          <source src={foodVid} type="video/mp4"></source>
        </video>
      </div>
      <div className="content">
        <h1>Hungry?</h1>
        <Link to='/menu'>
        <button className="btn"> Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
