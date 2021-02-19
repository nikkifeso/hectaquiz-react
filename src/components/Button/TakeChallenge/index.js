import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';
import FiPocket from '../../SvgIcons/FiPocket';

const TakeButton =()=> {
    return (
        <BtnDiv padding="20px" width="270px" height="64px">
            <BtnStyle hover hoverStroke ="#A9A9A9" padding="20px" color="#5332A6">
                <BtnText weight="500"><div style={{paddingRight:"10px"}}>Take the Challenge</div><FiPocket stroke="white"/></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default TakeButton
