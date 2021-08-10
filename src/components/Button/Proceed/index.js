import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';
import FiPocket from '../../SvgIcons/FiPocket';

const ProceedButton =()=> {
    return (
        <BtnDiv padding="20px" width="290px" height="64px">
            <BtnStyle hover hoverStroke ="#A9A9A9" padding="20px 40px" color="#5332A6">
                <BtnText weight="500"><div style={{paddingRight:"10px"}}>Proceed to Login</div><FiPocket stroke="white"/></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default ProceedButton