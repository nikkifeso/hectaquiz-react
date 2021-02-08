import React from 'react';
import {ProceedBtnStyle, ProceedDiv, ProceedTextDiv} from './style'

const ProceedButton =({color})=> {
    return (
        <ProceedDiv>
            <ProceedBtnStyle color={color}>
                <ProceedTextDiv><div style={{paddingRight:"10px"}}>Proceed to Dashboard</div><img src={process.env.PUBLIC_URL + "./fi_pocket.svg"} alt="arrow"/></ProceedTextDiv>    
            </ProceedBtnStyle>
        </ProceedDiv>
    )
}

export default ProceedButton