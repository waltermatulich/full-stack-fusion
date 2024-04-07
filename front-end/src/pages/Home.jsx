import "./home.css";
import logo from "../assets/logo.png";
import foodVid from '../assets/food-vid.mp4'
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import frontMussels from "../assets/frontmussels.jpg"
import onlineOrder from "../assets/onlineOrder.jpg"
import staffImg from "../assets/staffImg.jpg"
const Home = () => {
  return (
    <div>
      <div className="hero">
        
          <Link to='/' className="logo">
          <img src={logo}></img>
          </Link>
          <Nav />
        
      </div>
      

      <div>
        <video autoPlay loop muted playsInline className="foodVid">
          <source src={foodVid} type="video/mp4"></source>
        </video>
      </div>
      <div className="content">
        <Link to='/menu'>
        {/* <button className="btn"> Order Now</button> */}
        </Link>
      </div>
      {/* For the three photos below the video home page */}
      <div className="welcome">
    <h1> Welcome to Manny Munchies</h1>
    <div className="frontMussels">
        <div className="imageContainer">
            <img src={staffImg} alt="Online Order"></img>
            <h1>Meet the Staff</h1>
            
        </div>
        <div className="imageContainer">
            <img src={frontMussels} alt="Front Mussels"></img>
            <h1>Try our Signature Mussels!</h1>
            <h2>A house favorite</h2>
        </div>
        <div className="imageContainer">
            <img src={onlineOrder} alt="Online Order"></img>
            <h1>Order Online</h1>
            
        </div>
    </div>
</div>

      
    </div>
  );
};

export default Home;
