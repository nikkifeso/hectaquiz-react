import React from 'react';
import {BtnStyle, BtnText, ImgStyle} from './style';

const ShareResults =()=> {
    return (
        <BtnStyle>
            <ImgStyle>
            <img src={process.env.PUBLIC_URL + './share_icon.svg'} alt="share"></img>
            </ImgStyle>
            <BtnText>Share my Result</BtnText>
        </BtnStyle>
        
    )
}

export default ShareResults