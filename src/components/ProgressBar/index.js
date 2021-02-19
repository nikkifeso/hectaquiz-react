import React from 'react';
import {BaseBar, PositionBar} from './style';

const ProgressBar =({question})=> {
    return (
        <BaseBar>
            <PositionBar percent={`${(question/7)*100}%`}/>
        </BaseBar>
    )
}

export default ProgressBar
