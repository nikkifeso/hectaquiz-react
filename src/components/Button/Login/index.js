import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';
import FiPocket from '../../SvgIcons/FiPocket';

const LoginButton =()=> {
    return (
        <BtnDiv padding="20px" width="172px" height="64px">
            <BtnStyle hover hoverStroke ="#A9A9A9" padding="20px 40px" color="#5332A6" type="submit">
                <BtnText weight="500"><div style={{paddingRight:"10px"}}>Login</div><FiPocket stroke="white"/></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default LoginButton