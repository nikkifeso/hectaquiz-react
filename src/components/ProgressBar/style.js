import styled from 'styled-components';

export const BaseBar = styled.div`
    width: 474px;
    height: 5px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 2px;
    margin-top: 11px;
    margin-left: 27px;
`

export const PositionBar = styled.div`
    width: ${props => props.percent};
    height: 5px;
    background: #C2C2FF;
    border-radius: 2px;
`