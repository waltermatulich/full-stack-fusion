import "./home.css";
import logo from "../assets/logo.png";
import foodVid from '../assets/food-vid.mp4'
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import frontMussels from "../assets/frontmussels.jpg"
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
      <div className="welcome">
        <h1> Welcome to Manny Munchies</h1>
        <div className="frontMussels">
          <img src={frontMussels}></img>
          <h1>
            Try our Signature Mussels!</h1>
            <h2>A house favorite</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
