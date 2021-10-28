import React from 'react';
import {BtnStyle, BtnDiv, BtnText} from '../style';

const CreateButton =()=> {
    return (
        <BtnDiv width="200px" height="54px" style={{paddingRight:"50px", marginTop:"32px"}}>
            <BtnStyle padding="15px" color="#5332A6" hovercolor="#3908E4">
                <BtnText weight="600"><div>Create Account</div></BtnText>    
            </BtnStyle>
        </BtnDiv>
    )
}

export default CreateButton