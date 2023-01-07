import './carrousel.css';
import {FaChevronRight, FaChevronLeft} from "react-icons/fa";
import { useState } from 'react';

const Carrousel = (props) => {
    const pictures = props.pictures;
    const [position, setPosition] = useState(0);
    return (
      <>
        <div>
          <div className='fleche' onClick={() =>setPosition(position - 1 > 0 ? position - 1 : pictures.length-1)} ><FaChevronLeft/></div>
          <img src={pictures[position]} alt="information" className='img_carrousel'/>
          <div className='chiffre'>{position +1} / {pictures.length}</div>
          <div className='fleche_droite' onClick={() =>setPosition(position + 1 < pictures.length ? position + 1 : 0)}><FaChevronRight/></div>  
        </div>
      </>    

    );
  };
  

export default Carrousel;