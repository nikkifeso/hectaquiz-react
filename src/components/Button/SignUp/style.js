import styled from 'styled-components';

export const SignBtnStyle = styled.button`
    background-color: ${props => props.color};
    padding: 20px 40px;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 100%; 
    /* box-shadow: 0px 17px 70px; */
`

export const SignDiv = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* padding: 20px; */
    position: absolute;
    width: 195px;
    height: 64px;
    left: 60px;
    top: 625px;
`
export const SignTextDiv = styled.div`
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