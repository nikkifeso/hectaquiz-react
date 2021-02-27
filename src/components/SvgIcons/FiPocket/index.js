import React from 'react';
import {PathStyle} from '../../Button/style';

const FiPocket = ({stroke}) =>{
    return(
        <svg className="fipocket" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <PathStyle d="M3 20L3 4C3 3.46957 3.21071 2.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2L11 2C13.6522 2 16.1957 3.05357 18.0711 4.92893C19.9464 6.8043 21 9.34783 21 12C21 13.3132 20.7413 14.6136 20.2388 15.8268C19.7362 17.0401 18.9997 18.1425 18.0711 19.0711C16.1957 20.9464 13.6522 22 11 22L5 22C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V20Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <PathStyle d="M10 16L14 12L10 8" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default FiPocket