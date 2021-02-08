import React from 'react';
import {TakeBtnStyle, TakeDiv, TextDiv} from './style'

const TakeButton =({color})=> {
    return (
        <TakeDiv>
            <TakeBtnStyle color={color}>
                <TextDiv><div style={{paddingRight:"10px"}}>Take the Challenge</div><img src={process.env.PUBLIC_URL + "./fi_pocket.svg"} alt="arrow"/></TextDiv>    
            </TakeBtnStyle>
        </TakeDiv>
    )
}

export default TakeButton
