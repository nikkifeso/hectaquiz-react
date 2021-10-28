import React from 'react';
import { NavbarStyle, LoginText, LoginDiv, AccountDiv, RightNavDiv} from '../style';
import Logo from '../LogoComp';
import Hamburger from '../LogoComp/hamburger_icon';
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
                <RightNavDiv>
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
                    <AccountDiv>
                            <StyledLink to='/sign-up'>
                                    <CreateAccount/>
                            </StyledLink>
                            <Hamburger/>       
                    </AccountDiv>
                </RightNavDiv>
               
           </NavbarStyle> 
    )
}

export default LandingNavbar;

