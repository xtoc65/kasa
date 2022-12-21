import { useState } from "react";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";

const Collapse = (props) => {
    const [ouvert, setOuvert] = useState(false);
    return (
      <>
        <div>
            <div onClick={()=>setOuvert(!ouvert)}>
                {props.label}
            
                {ouvert? (<span><FaAngleUp/></span>): (<span><FaAngleDown/></span>) }
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