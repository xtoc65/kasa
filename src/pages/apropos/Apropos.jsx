import apropos from "../../images/apropos.png";
import Collapse from "../../composants/collapse/collapse";
import './apropos.css';

const Apropos = () => {
    return (
      <>
        <img src={apropos} alt="images" className="imgpropos"/>
          <div className="label">
          <Collapse label="Fiabilité" >
              <p className="drop">Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations 
                sont régulièrement vérifiées  par nos équipes.</p>    
          </Collapse>
        </div>

        <div className="label">
          <Collapse label="Respect">
            <p className="drop">La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage
                entraînera une exclusion de notre plateforme.</p>   
          </Collapse>
        </div>

        <div className="label">
          <Collapse label="Service">
            <p className="drop">Nos équipes se tiennent à votre disposition pour vous fournir une 
                expérience parfaite. N'hésitez pas à nous contacter si vous avez 
                la moindre question.</p>             
          </Collapse>
        </div>

        <div className="label">
          <Collapse label="Sécurité">
              <p className="drop">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes 
                que pour les voyageurs, chaque logement correspond aux critères 
                de sécurité établis par nos services. En laissant une note aussi 
                bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier 
                que les standards sont bien respectés. Nous organisons également des 
                ateliers sur la sécurité domestique pour nos hôtes.</p>
          </Collapse>
        </div> 
        

      </>      
    );
  };
  
  export default Apropos;