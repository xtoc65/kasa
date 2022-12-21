import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import '../../App.css';
import './nav.css';
import Home from "../../pages/home/Home";


const nav = () => {
  return (   
    <> 
    <div className="header">
      <img src={logo} className="App-logo" alt="logo kasa"/>
      <nav className="navbar">
          <Link to="/home" className="navbar_link" id="home">Home</Link>
          <Link to="/apropos" className="navbar_link" id="propos">A propos</Link>
      </nav>
    </div>   
    <Home />
    
    </>
  )
};

export default nav;