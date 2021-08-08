import styled from 'styled-components';

export const Inputstyle = styled.input`
    background: rgba(194, 194, 255, 0.1);
    border: ${props=> props.border || '1px solid rgba(194, 194, 255, 0.5)'};
    border-radius: 5px;
    padding-left: 15px;
    width: 100%;
    height: 100%;
    

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
export const Text = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: flex-end;
    margin-top: -10px;
    color: ${props => props.color || '#4d4d4d'}

`
export const InputDiv = styled.div`
    display: flex;
    width: 414px;
    height: 50px;
    padding: 15px 0px;
`