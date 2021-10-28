import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';
import {FiPocket} from '../../SvgIcons/FiPocket';

const PreviousButton =()=> {
    return (
        <BtnDiv padding="20px" width="260px" height="64px">
            <BtnStyle hover hoverStroke ="#A9A9A9" padding="10px" color="#42366D">
                <BtnText textHover weight="500"><FiPocket stroke="white" style={{transform: "rotate(180deg)"}}/><div style={{paddingLeft:"10px", overflowWrap: "break-word"}}>Previous Question</div></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default PreviousButton