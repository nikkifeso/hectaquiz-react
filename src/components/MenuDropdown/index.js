import React from 'react';
import {MenuContainer, MenuItem, ImgStyle, TextStyle} from './style'




const Dropdown =()=>{

    const Logout = () => {
        localStorage.clear();
        window.location.href = '/';
    };

    return (
        <MenuContainer>
            <MenuItem style={{marginBottom: "1px"}}><ImgStyle src={process.env.PUBLIC_URL + './menu_history.svg'} alt="history"/><TextStyle>Quiz History</TextStyle></MenuItem>
            <MenuItem onClick={Logout}><ImgStyle src={process.env.PUBLIC_URL + './logout_icon.svg'} alt="logout"/><TextStyle>Logout</TextStyle></MenuItem>
        </MenuContainer>
    )
}

export default Dropdown
