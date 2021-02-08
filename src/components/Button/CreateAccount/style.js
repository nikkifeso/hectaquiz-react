import styled from 'styled-components';

export const CreateBtnStyle = styled.button`
    background-color: ${props => props.color};
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 100%;
`

export const CreateDiv = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* padding: 20px; */
    position: absolute;
    width: 200px;
    height: 54px;
    left: 1151px;
    top: 32px;
`
export const CreateTextDiv = styled.div`
    position: static;
    color: #ffffff;
    width: 160px;
    height: 24px;            
    left: 20px;
    top: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: flex-end;
`