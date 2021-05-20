import React from 'react';
import {CardDiv, TopText} from './style';
import Category from '../CategoryComponent';

const CategoryCard =()=> {
    return (
        <div style={{display: "flex"}}>
        <div style={{flex: "31%"}}></div>
        <CardDiv>
            <TopText> Select a Quiz Category</TopText>
            <Category category="General Knowledge" icon="fqc"/>
            <Category category="History" icon="fah"/>
            <Category category="Music" icon="fam"/>
            <Category category="TV and Film" icon="bsf"/>
            <Category category="Geography" icon="biw"/>
            <Category category="Sports" icon="fvb"/>
            <Category category="Science" icon="gms"/>
        </CardDiv>
        <div style={{flex: "31%"}}></div>
        </div>
    )
}

export default CategoryCard;
