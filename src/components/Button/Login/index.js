import React from 'react';
import {LoginBtnStyle, LoginDiv, LoginTextDiv} from './style'

const LoginButton =({color})=> {
    return (
        <LoginDiv>
            <LoginBtnStyle color={color}>
                <LoginTextDiv><div style={{paddingRight:"10px"}}>Login</div><img src={process.env.PUBLIC_URL + "./fi_pocket.svg"} alt="arrow"/></LoginTextDiv>    
            </LoginBtnStyle>
        </LoginDiv>
    )
}

export default LoginButton