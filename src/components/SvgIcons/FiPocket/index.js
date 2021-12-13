import React from 'react';
import {PathStyle} from '../../Button/style';

export const FiPocket = ({stroke}) =>{
    return(
        <svg className="fipocket" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <PathStyle d="M3 20L3 4C3 3.46957 3.21071 2.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2L11 2C13.6522 2 16.1957 3.05357 18.0711 4.92893C19.9464 6.8043 21 9.34783 21 12C21 13.3132 20.7413 14.6136 20.2388 15.8268C19.7362 17.0401 18.9997 18.1425 18.0711 19.0711C16.1957 20.9464 13.6522 22 11 22L5 22C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V20Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <PathStyle d="M10 16L14 12L10 8" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const FiPocketSmall = ({stroke}) =>{
    return(
        <svg className="fipocket" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <PathStyle d="M2.125 14.1667L2.125 2.83334C2.125 2.45761 2.27425 2.09728 2.53993 1.8316C2.80561 1.56592 3.16594 1.41667 3.54167 1.41667L7.79167 1.41667C9.67028 1.41667 11.472 2.16295 12.8003 3.49133C14.1287 4.81971 14.875 6.62138 14.875 8.5C14.875 9.4302 14.6918 10.3513 14.3358 11.2107C13.9798 12.0701 13.4581 12.8509 12.8003 13.5087C11.472 14.8371 9.67028 15.5833 7.79167 15.5833L3.54167 15.5833C3.16594 15.5833 2.80561 15.4341 2.53993 15.1684C2.27426 14.9027 2.125 14.5424 2.125 14.1667V14.1667Z" stroke={stroke} strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
            <PathStyle d="M7.08333 11.3333L9.91667 8.5L7.08333 5.66667" stroke={stroke} strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
