import styled from 'styled-components';

export const ContainerDiv = styled.div`
    width: 542px;
    /* height: 642px; */
    display: inline-block;
    background: #FFFFFF;
    box-shadow: 10.7653px 10.7653px 21.5307px rgba(107, 127, 153, 0.02), -12.3265px 12.3265px 24.6531px rgba(107, 127, 153, 0.02);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const QuestionSpan = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #42366D;
    margin-left: 30px;
    margin-top: 50px;
    margin-bottom: 29px;
`

export const AnswerDiv = styled.div`
    width: 433px;
    height: 50px;
    background: #F3F3FE;
    border-radius: 5px;
    margin-left: 54px;
    margin-bottom: 15px;
`
export const CheckBoxLabel = styled.div`
    width: 256px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #686868;
    margin-top: 13px;
    margin-left: 15px;
`
export const CheckBox = styled.input`
    border: 2px solid #C2C2FF;
    background-color: #F3F3FE;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
`