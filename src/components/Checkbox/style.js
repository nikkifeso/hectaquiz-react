import styled from 'styled-components';
import {FaCheck} from 'react-icons/fa';

export const Label = styled.div`
    width: 256px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #686868;
    margin-top: 18px;
    margin-left: 10px;

`
export const AnswerDiv = styled.div`
    background: #F3F3FE;
    border-radius: 5px;
    display: flex;
    margin: 0px 54px 15px 54px;  
    cursor: pointer; 

    &:checked{
        ${Label}
        background: #734BFF;
    }
`
export const CheckBorder = styled.input`
    width: 18px;
    height: 18px;
    display: flex;
    border: 2px solid #C2C2FF;
    border-radius: 5px;
    margin: 16.5px 0px 16.5px 18px;
    align-items: center;
    justify-content: center;
`

export const CheckIndicator = styled(FaCheck)`
    height: 8.5px;
    width: 11.21px;
    color: black;  
    margin: 6px 4.79px 5.5px 4px;
    z-index: 1;
`