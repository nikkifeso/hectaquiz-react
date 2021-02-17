import styled from 'styled-components';

export const MenuContainer = styled.div`
    background-color: #FAEED4;
    width: 261px;
    height: 107px;
    display: flex;
    flex-direction: column;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    align-items: flex-end;
    color: #312B39;

`
export const ImgStyle = styled.img`
    margin: 15px 15px 15px 19px;
`

export const TextStyle = styled.span `
    margin-top: 17px;
`

export const MenuItem = styled.div`
    display: flex;
    width: 100%;
    height: 53px;
    border-radius: 3px;
    background-color: #fffdf8;
    :hover{
        color: #3F1CB9;
        cursor: pointer;
        ${ImgStyle}{
            color: #3F1CB9;
        }
    }
`
