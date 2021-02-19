import styled from 'styled-components';

export const BtnStyle = styled.button`
    width: 228px;
    height: 50px;
    outline: none;
    border: 1px solid #42366D;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    background-color: #ffffff;

    :hover{
        cursor: pointer;
        background-color: #FFFDF8;
    }
`

export const BtnText = styled.span`
    height: 20px;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #42366D;
    margin-top: 15px;
    margin-left: 15px;
`

export const ImgStyle = styled.div`
    margin-left: 20px;
    margin-top: 17px;
`