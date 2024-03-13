import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import login from "../assets/backgroundLogin.jpg";
import "../pages/css/signup.css";
function Signup(){
    return(
        <div>
      <Nav />
      <img className="loginImg" src={login} alt="Login Background" />

      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" />
          </div>
          

            <button type="submit">Sign Up</button>

            <div className="register-link">
              <p>
                Create your muscle account!
              </p>
            </div>
          
        </form>
      </div>
    </div>
    )
}
export default Signup