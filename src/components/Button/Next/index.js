import React from 'react';
import {NextBtnStyle, NextDiv, NextTextDiv} from './style'

const NextButton =({color})=> {
    return (
        <NextDiv>
            <NextBtnStyle color={color}>
                <NextTextDiv><div style={{paddingRight:"10px"}}>Next Question </div><img src={process.env.PUBLIC_URL + "./fi_pocket.svg"} alt="arrow"/></NextTextDiv>       
            </NextBtnStyle>
        </NextDiv>
    )
}

export default NextButton