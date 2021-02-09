import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';

const ProceedButton =()=> {
    return (
        <BtnDiv padding="20px" width="342px" height="64px">
            <BtnStyle padding="20px 40px" color="#5332A6" hovercolor="#3908E4">
                <BtnText weight="500"><div style={{paddingRight:"10px"}}>Proceed to Dashboard</div><img src={process.env.PUBLIC_URL + "./fi_pocket.svg"} alt="arrow"/></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default ProceedButton