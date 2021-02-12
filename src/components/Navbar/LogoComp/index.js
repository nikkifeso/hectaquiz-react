import React from 'react';
import { Logotext, LogoDiv } from '../style';

const Logo =()=> {
    return(
           <LogoDiv>
               <img src={process.env.PUBLIC_URL + './Logo-LightBulb.svg'} alt="logo"/>
               <Logotext>HectaQuiz</Logotext>
           </LogoDiv>

    )
}

export default Logo;