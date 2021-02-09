import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';

const PreviousButton =()=> {
    return (
        <BtnDiv padding="20px" width="260px" height="64px">
            <BtnStyle padding="20px" color="#42366D">
                <BtnText textHover weight="500"><img src={process.env.PUBLIC_URL + "./fi_pocket.svg"} alt="arrow" style={{transform: "rotate(180deg)"}}/><div style={{paddingLeft:"10px"}}>Previous Question</div></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default PreviousButton