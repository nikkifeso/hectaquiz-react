import React from 'react';
import {HamburgerDiv } from '../style';

const Hamburger =()=> {
    return(
           <HamburgerDiv>
               <img src={process.env.PUBLIC_URL + './hamburger.svg'} alt="logo"/>
           </HamburgerDiv>

    )
}

export default Hamburger;