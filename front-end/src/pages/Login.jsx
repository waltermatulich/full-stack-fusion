import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import "../pages/css/login.css";
import login from "../assets/backgroundLogin.jpg";
function Login() {
  return (
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
            <input type="password" placeholder="Password" />
          </div>

            <button type="submit">Login</button>

            <div className="register-link">
              <p>
                Don't have a muscle account?
              </p>
              <Link to="/signup">
              <a className="register"href="#"> Register</a>
              </Link>
            </div>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
