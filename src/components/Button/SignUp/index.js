import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';
import {FiPocket} from '../../SvgIcons/FiPocket';

const SignUpButton =()=> {
    return (
        <BtnDiv padding="20px" width="195px" height="64px">
            <BtnStyle type="submit" hover hoverStroke ="#A9A9A9" padding="20px 40px" color="#5332A6" hovercolor="#3908E4">
                <BtnText weight="500"><div style={{paddingRight:"10px"}}>Sign Up</div><FiPocket stroke="white"/></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default SignUpButton