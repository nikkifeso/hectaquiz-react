import React from 'react';
import { NavbarStyle, LoginText, LoginDiv } from '../style';
import Logo from '../LogoComp';
import CreateAccount from '../../Button/CreateAccount'

const LandingNavbar =()=> {
    return(
           <NavbarStyle>
               <Logo/>
               <LoginDiv>
                <img src={process.env.PUBLIC_URL + './lock.svg'} alt="logo" style={{paddingBottom:"31px"}}/>
                <LoginText>Login</LoginText>
               </LoginDiv>
               <div>
                <CreateAccount/>
               </div>
           </NavbarStyle> 
    )
}

export default LandingNavbar;

