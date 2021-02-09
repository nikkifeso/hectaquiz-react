import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';

const TakeButton =()=> {
    return (
        <BtnDiv padding="20px" width="270px" height="64px">
            <BtnStyle padding="20px" color="#5332A6" hovercolor="#3908E4">
                <BtnText weight="500"><div style={{paddingRight:"10px"}}>Take the Challenge</div><img src={process.env.PUBLIC_URL + "./fi_pocket.svg"} alt="arrow"/></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default TakeButton
