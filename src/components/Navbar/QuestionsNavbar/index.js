import React from 'react';
import { NavbarStyle, AvatarDiv, UserText, DropdownBtn } from '../style';
import { Logotext, LogoDiv } from './style';

const QuestionsNavbar =({backgroundColor})=> {
    return(
           <NavbarStyle backgroundColor={backgroundColor}>
            <LogoDiv>
                <img src={process.env.PUBLIC_URL + './Logo-LightBulb.svg'} alt="logo"/>
                <Logotext>HectaQuiz</Logotext>
           </LogoDiv>
               <AvatarDiv>
                <img src={process.env.PUBLIC_URL + './person.svg'} alt="logo"  style={{height:"40px", marginTop: "14px"}}/>
                <UserText>crowngeh@gmail.com</UserText>
                <DropdownBtn><img src={process.env.PUBLIC_URL + './expand_down.svg'} alt="logo"/></DropdownBtn>
               </AvatarDiv>
           </NavbarStyle> 
    )
}

export default QuestionsNavbar;