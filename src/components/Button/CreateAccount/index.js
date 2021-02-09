import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';

const CreateButton =()=> {
    return (
        <BtnDiv padding="20px" width="200px" height="54px">
            <BtnStyle padding="15px" color="#5332A6" hovercolor="#3908E4">
                <BtnText weight="600"><div style={{paddingRight:"10px"}}>Create Account</div></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default CreateButton