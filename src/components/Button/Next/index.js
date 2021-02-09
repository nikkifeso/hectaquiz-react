import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';

const NextButton =()=> {
    return (
        <BtnDiv padding="20px" width="231px" height="64px">
            <BtnStyle padding="20px" color="#42366D">
                <BtnText textHover weight="500"><div style={{paddingRight:"10px"}}>Next Question</div><img src={process.env.PUBLIC_URL + "./fi_pocket.svg" } alt="arrow"/></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default NextButton