import styled from 'styled-components';
import {FiArrowRight} from 'react-icons/fi';

export const IconDiv = styled.div`
    width: 52px;
    height: 52px;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    margin: 12px 18px;
    font-size: 30px;
`

export const CategoryDiv = styled.div`
    display: flex;
    width: 433px;
    height: 77px;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 0 0 1px #f5f5f5;
    color: #312B39;
    margin-left: 50px;
    margin-bottom: 15px;

    &:hover{
        border: 1px solid #42366D;   
        ${IconDiv}{
            background-color: #42366D;   
            color: #ffffff;
        }
    }
`

export const Text = styled.span`
    margin-top: 30px;
    width: 230px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
`
export const ArrowStyle = styled(FiArrowRight)`
    color: #312B39;
    font-size: 24px;
    margin-top: 27px;
    margin-left: 42px;
`