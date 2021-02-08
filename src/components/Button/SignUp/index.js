import React from 'react';
import {SignBtnStyle, SignDiv, SignTextDiv} from './style'

const SignUpButton =({color})=> {
    return (
        <SignDiv>
            <SignBtnStyle color={color}>
                <SignTextDiv><div style={{paddingRight:"10px"}}>Sign Up</div><img src={process.env.PUBLIC_URL + "./fi_pocket.svg"} alt="arrow"/></SignTextDiv>    
            </SignBtnStyle>
        </SignDiv>
    )
}

export default SignUpButton