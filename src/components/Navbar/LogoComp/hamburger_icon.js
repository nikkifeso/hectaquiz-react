import React from 'react';
import {HamburgerDiv} from '../style';

const Hamburger =(props)=> {
    return(
           <HamburgerDiv onClick={props.showMenu}>
               <img src={process.env.PUBLIC_URL + './hamburger.svg'} alt="logo"/>
           </HamburgerDiv>

    )
}

export default Hamburger;