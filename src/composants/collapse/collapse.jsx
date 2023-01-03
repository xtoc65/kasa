import { useState } from "react";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import './collapse.css';;

const Collapse = (props) => {
    const [ouvert, setOuvert] = useState(false);
    return (
      <>
        <div>
            <div onClick={()=>setOuvert(!ouvert)} className='accordeon'>
                 {props.label}
            
                {ouvert? (<span className='faAngle'><FaAngleUp/></span>): (<span className='faAngle'><FaAngleDown/></span>) }
            </div>
           
        </div>
        <div>
            {ouvert && 
                <div>
                    {props.children}
                </div>
            }
        </div>
      </>      
    );
  };
  

export default Collapse;