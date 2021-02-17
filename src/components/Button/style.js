import styled from 'styled-components';

export const BtnStyle = styled.button`
    background-color: ${props => props.color};
    padding: ${props => props.padding};
    border: none;
    border-radius: 5px;
    box-shadow: 0px 17px 70px rgba(49, 43, 57, 0.35);
    width: 100%;
    height: 100%;  
    :hover{
        background-color: ${props => props.hovercolor};
        cursor: pointer;
    } 
`
export const BtnDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: ${props => props.padding};
    width: ${props => props.width};
    height: ${props => props.height};
`
export const BtnText = styled.div`
    position: static;
    color: #ffffff;
    width: 100%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: ${props => props.weight};
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: flex-end;

    :hover{
        color: ${props => props.textHover ? "#A9A9A9" : "#ffffff"}
    } 
`