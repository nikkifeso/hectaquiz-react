import React, {useState} from 'react';
import {AnswerDiv, CheckBorder, CheckIndicator, Label} from './style';

const CheckBox =({label})=> {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
      };
    return (
        
         <AnswerDiv className={isActive? "active": null} 
         onClick={handleToggle}
         tabindex="0">
             <CheckBorder>
             {
                isActive === true ? <CheckIndicator size={50}/> : null
            }
             </CheckBorder>  
             <Label>{label}</Label> 
             
        </AnswerDiv>
    )
}

export default CheckBox;