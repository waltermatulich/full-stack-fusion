import "./home.css";
import logo from "../assets/logo.png";
import foodVid from "../assets/food-vid.mp4";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import frontMussels from "../assets/frontmussels.jpg";
import onlineOrder from "../assets/onlineOrder.jpg";
import staffImg from "../assets/staffImg.jpg";
import Eli from "../assets/eli.jpg";
import Manny from "../assets/Manny.jpg";
const Home = () => {
  return (
    <div>
      <div className="hero">
        <Link to="/" className="logo">
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
        <Link to="/menu">
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

        {/* divider line seperating photos and about section*/}
        <div className="dividerLine"> </div>

        {/* about section */}

        <div className="aboutHeading">
          <h1>About Us</h1>
        </div>

        <div className="aboutBeliefs">
          <p>
            Welcome to Manny Munchies, where our culinary journey is infused
            with values we hold dear: good cuisine, integrity, community, and
            growth. At Manny Munchies, we're more than just a restaurant; we're
            a hub for food lovers, families, and friends to come together and
            savor the essence of great food. Our commitment to good cuisine is
            evident in every dish we create, crafted with passion and precision
            to delight your taste buds and leave you craving more. Integrity is
            at the heart of everything we do, from sourcing the finest
            ingredients to delivering exceptional service with honesty and
            transparency. We believe in fostering a sense of community, where
            diners can gather, share stories, and create cherished memories over
            a delicious meal. And as we continue to evolve and grow, we remain
            dedicated to providing a welcoming space for all, where culinary
            exploration meets warm hospitality. Join us at Manny Munchies, where
            our values shape every bite, and every visit feels like coming home.
          </p>
        </div>
      </div>

      <div className="dividerLine"> </div>

      {/* meet the staff section*/}
      <div class="meetStaff">
        <h1>Meet the Staff</h1>

        <div class="staffSection">
          
          <div class="foh">
            <img src={Eli} alt="front end"></img>
            <h2>Front of House</h2>
          </div>

          <div class="boh">
            <img src={Manny} alt="back end"></img>
            <h2>Back of House</h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
