import { Link } from "react-router-dom";
import logo_footer from '../../images/logo_footer.png';
import './footer.css';

const Footer = () => {
    return (
      <div className="footer">
        <img src={logo_footer} className="footer_logo" alt="logo kasa"/>
        <p className="footer_texte">© 2020 Kasa. All rights reserved</p>
      </div>      
    );
  };
  
  export default Footer;