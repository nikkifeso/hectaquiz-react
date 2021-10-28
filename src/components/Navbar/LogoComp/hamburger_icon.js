import React from 'react';
import { Logotext, LogoDiv } from '../style';

const Hamburger =()=> {
    return(
           <LogoDiv>
               <img src={process.env.PUBLIC_URL + './hamburger.svg'} alt="logo"/>
           </LogoDiv>

    )
}

export default Hamburger;