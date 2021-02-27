import React from 'react';
import {AnswerDiv, CheckBorder, CheckIndicator, Label} from './style';

const CheckBox =({checked, onChange, label})=> {
    return (
        
         <AnswerDiv onClick={()=> onChange(!checked)}>
             <CheckBorder>
             {
                checked === true ? <CheckIndicator/> : null
            }
             </CheckBorder>  
             <Label>{label}</Label>   
        </AnswerDiv>
    )
}

export default CheckBox;