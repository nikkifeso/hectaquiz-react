import React from 'react';
import {CreateBtnStyle, CreateDiv, CreateTextDiv} from './style'

const CreateButton =({color})=> {
    return (
        <CreateDiv>
            <CreateBtnStyle color={color}>
                <CreateTextDiv>Create Account</CreateTextDiv>    
            </CreateBtnStyle>
        </CreateDiv>
    )
}

export default CreateButton