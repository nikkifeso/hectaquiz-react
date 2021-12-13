import React from 'react';
import {BtnStyle, BtnDivSmall, BtnTextSmall} from '../style';
import {FiPocketSmall} from '../../SvgIcons/FiPocket';

const TakeButtonSmall =()=> {
    return (
        <BtnDivSmall padding="20px" width="204px" height="64px">
            <BtnStyle hover hoverStroke ="#A9A9A9" padding="20px" color="#5332A6">
                <BtnTextSmall weight="500"><div style={{paddingRight:"10px"}}>Take the Challenge</div><FiPocketSmall stroke="white"/></BtnTextSmall>    
            </BtnStyle>
        </BtnDivSmall>
    )
}

export default TakeButtonSmall