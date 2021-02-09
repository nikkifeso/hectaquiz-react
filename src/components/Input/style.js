import styled from 'styled-components';

export const Inputstyle = styled.input`
    background: rgba(194, 194, 255, 0.1);
    border: 1px solid rgba(194, 194, 255, 0.5);
    border-radius: 5px;
    /* position: absolute; */
    padding-left: 15px;
    width: 100%;
    height: 100%;
    /* left: 60px;
    top: 285px; */

    ::placeholder{
        font-family: "Montserrat";
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: flex-end;
        color: #616161;
    }
    :focus{
        outline: none;
    }
    :hover{
        border: 1.5px solid #C2C2FF;    

    }
`

export const InputDiv = styled.div`
    display: flex;
    width: 414px;
    height: 50px;
    padding: 15px 0px;
`