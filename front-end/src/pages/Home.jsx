import './home.css'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <nav className="navBar">
            <Link to='/' className='logo'>
              <img src={logo}></img>
            </Link>
            <div className="links">
                <Link to="/menu"> Menu</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
        <div>
          <img src='' className='mainPic'></img>
        </div>
    </div>
  )
}

export default Home