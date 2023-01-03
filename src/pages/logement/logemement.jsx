import { useContext } from "react";
import {useParams} from "react-router-dom";
import LogementsContext from "../../context/logements-context";
import Carrousel from "../../composants/carrousel/carousel";
import Collapse from "../../composants/collapse/collapse";
import "./logement.css"
import {FaStar} from "react-icons/fa";


const Logement = () => {
  const logements = useContext(LogementsContext);
  const {id} = useParams();
  const logement = logements.find(lgt =>lgt.id === id); 
  const etoiles = [1,2,3,4,5];
    return (   
      <>
        <Carrousel pictures = {logement.pictures}/>
        <div className="host_title">
          <h1>{logement.title}</h1>
          <div className="host">
            <p className="host_name">{logement.host.name}</p>
            <img src={logement.host.picture} alt="img de la personne" className="hote"/>
          </div>   
        </div>    
          <p className="loca">{logement.location}</p>
        <div className="tags">
          {logement.tags.map((tag , index) =>
              (
                <p className="tags_loge" key={index}>{tag}</p>
              )
            )
          } 
        </div>  
        <div>
          {etoiles.map((rating) =>
              (
                
                <FaStar key={rating} className={logement.rating >= rating? "rouge": "gris"}/>
                
              )
            )
          }
        </div>
        <div className="information">
          <div className="info">
            <Collapse label="Description">
              <p className="description">{logement.description}</p>
            </Collapse>
          </div>
        
          <div className="info">
            <Collapse label="Equipement">
              <div className="equipement">
                {logement.equipments.map((equipement, index) =>
                    (
                      <p className="description_equipement" key={index}>{equipement}</p>
                    )
                  )
                }
              </div>
            </Collapse>  
          </div>
        </div>
        
              
       

      </>
    )
  };
  
  export default Logement;