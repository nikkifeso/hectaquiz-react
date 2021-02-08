import styled from 'styled-components';

export const TakeBtnStyle = styled.button`
    background-color: ${props => props.color};
    padding: 20px;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 100%;   
`
export const TakeDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
    position: absolute;
    width: 270px;
    height: 64px;
    left: 60px;
    top: 581px;
`
export const TextDiv = styled.div`
    position: static;
    color: #ffffff;
    width: 100%;
    /* height: 24px; */
    left: 20px;
    top: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    /* align-items: flex-end; */
`