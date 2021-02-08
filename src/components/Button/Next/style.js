import styled from 'styled-components';

export const NextBtnStyle = styled.button`
    background-color: ${props => props.color};
    padding: 20px;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 100%; 
    /* box-shadow: 0px 17px 70px; */
`

export const NextDiv = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* padding: 20px; */
    position: absolute;
    width: 231px;
    height: 64px;
    left: 706px;
    top: 607px;
`
export const NextTextDiv = styled.div`
    position: static;
    color: #ffffff;
    width: 100%;
    height: 24px;
    left: 20px;
    top: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: flex-end;
`