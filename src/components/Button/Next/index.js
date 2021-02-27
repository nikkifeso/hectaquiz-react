import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';
import FiPocket from '../../SvgIcons/FiPocket';

const NextButton =({text})=> {
    return (
        <BtnDiv padding="20px" width="231px" height="64px">
            <BtnStyle hover hoverStroke ="#A9A9A9" padding="20px" color="#42366D">
                <BtnText weight="500"><div style={{paddingRight:"10px"}}>{text}</div><FiPocket stroke="white"/></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default NextButton