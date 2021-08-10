import React from 'react';
import { NavbarStyle, LoginText, LoginDiv } from '../style';
import Logo from '../LogoComp';
import CreateAccount from '../../Button/CreateAccount';
import {StyledLink} from '../../style';


const LandingNavbar =()=> {
    return(
           <NavbarStyle>
               <div>
                    <StyledLink to='/'>
                        <Logo/>
                    </StyledLink>
                </div>
                   
               <LoginDiv>
                    <StyledLink to='/login'>
                        <img src={process.env.PUBLIC_URL + './lock.svg'} alt="logo" style={{paddingBottom:"31px"}}/>
                    </StyledLink>
                
                <LoginText>
                    <StyledLink to='/login'>
                        Login
                    </StyledLink>
                        
                </LoginText>
               </LoginDiv>
               <div>
                    <StyledLink to='/sign-up'>
                            <CreateAccount/>
                    </StyledLink>         
               </div>
           </NavbarStyle> 
    )
}

export default LandingNavbar;

