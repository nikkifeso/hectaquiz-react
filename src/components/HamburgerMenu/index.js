import React from "react";
import {LoginDiv, LogoText, CreateDiv} from './style'
import { StyledLink } from "../style";

const  HamburgerMenu =()=>{
    return(
        <> 
            <StyledLink to='/login'>
                <LogoText>
                    <img src={process.env.PUBLIC_URL + './u_lock-alt.svg'} alt="logo"/>
                    <LoginDiv>
                        Login
                    </LoginDiv>
                    
                </LogoText>
            </StyledLink>
            <StyledLink to='/sign-up'>
                <CreateDiv>Create Account</CreateDiv>
            </StyledLink>    
        </>
    )
}

export default HamburgerMenu