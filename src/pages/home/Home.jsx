import { useContext } from "react";
import LogementsContext from "../../context/logements-context";
import Bannier from "../bannier/bannier";
import './home.css';

const Home = () => {
  const logements = useContext(LogementsContext);
    return (   
      <>
      <div className="body">
        <Bannier />
        <div className="card">
          {logements.map(logement => 
            (
              <div key={logement.id} className="logements">
                  <img src={logement.cover} alt={logement.description} className="img" />
                  <p className="titre">{logement.title}</p>
              </div>
            )
          )}
        </div>
      </div>
        
      </>
    )
  };
  
  export default Home;