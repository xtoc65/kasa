import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import '../../App.css';
import './nav.css';

const nav = () => {
  return (   
    <> 
    <div className="header">
      <img src={logo} className="App-logo" alt="logo kasa"/>
      <nav className="navbar">
          <Link to="" className="navbar_link">Home</Link>
          <Link to="/apropos" className="navbar_link">A propos</Link>
      </nav>
    </div>      
    </>
  )
};

export default nav;