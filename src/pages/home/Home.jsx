import { useContext } from "react";
import { Link } from "react-router-dom";
import LogementsContext from "../../context/logements-context";
import Bannier from "../bannier/bannier";
import './home.css';

const Home = () => {
  const logements = useContext(LogementsContext);
    return (   
      <>
      <div className="body">
        <Bannier />
        <section className="card">
          {logements.map(logement => 
            (
              <article key={logement.id} className="logements">
                <Link to= {"/logement/" + logement.id}>
                  <img src={logement.cover} alt={logement.description} className="img" />
                  <p className="titre">{logement.title}</p>
                </Link>                  
              </article>
            )
          )}
        </section>
      </div>
        
      </>
    )
  };
  
  export default Home;