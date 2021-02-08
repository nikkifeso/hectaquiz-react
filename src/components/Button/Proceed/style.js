import styled from 'styled-components';

export const ProceedBtnStyle = styled.button`
    background-color: ${props => props.color};
    padding: 20px 40px;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 100%; 
    /* box-shadow: 0px 17px 70px; */
`

export const ProceedDiv = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* padding: 20px; */
    width: 342px;
    height: 64px;
    left: 61px;
    top: 394px;
`
export const ProceedTextDiv = styled.div`
    position: static;
    color: #ffffff;
    width: 100%;
    height: 24px;
    left: 40px;
    top: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: flex-end;
`