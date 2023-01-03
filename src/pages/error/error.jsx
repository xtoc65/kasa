import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layouts/footer/footer";
import Nav from "../../layouts/header/nav";
import '../../App.css';
import './error.css';

const Error = () => {  
    return (   
      <>
      <div className="container">
        <Nav />
        <div className="centre">
            <h1 className="h1">404</h1>
            <p className="retour_page">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/home" className="retour_link">Retourner sur la page d’accueil</Link>
        </div>
      </div>
      <Footer />
      
        
      </>
    )
  };
  
  export default Error;