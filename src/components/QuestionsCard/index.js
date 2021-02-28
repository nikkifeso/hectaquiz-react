import React, {useState} from 'react';
import {ContainerDiv, QuestionSpan} from './style';
import ProgressBar from '../ProgressBar';
import {TopText}from '../FinishedCard/style';
import NextButton from '../Button/Next';
import PreviousButton from '../Button/Previous';
import FinishedButton from '../Button/Finished';
import CheckBox from '../Checkbox';

const QuestionsCard =()=>{ 
    const question = "6"  
    return (
        <ContainerDiv>
            <TopText>Question {question}</TopText>
            <ProgressBar question={question}/>  
            <QuestionSpan> Who is your President?</QuestionSpan>  
            <CheckBox label="mr A"></CheckBox>
            <CheckBox label="mr B"></CheckBox>
            <CheckBox label="mr C"></CheckBox>
            
            {
                question === "7" ? <div style={{margin:"40px 0px 132px 30px" , display:"flex"}}>
                    <PreviousButton/>
                    <FinishedButton text="Finished" style={{marginLeft:"1px"}}/>
                </div>
                : question > "1" ? <div style={{margin:"40px 0px 132px 0px", display:"flex", justifyContent: "space-between"}}>
                    <PreviousButton/>
                    <NextButton text="Next Question"/>
                </div>
                :
                <div style={{margin:"40px 0px 132px 256px"}}>
                    <NextButton text="Next Question"/>
                </div>
            }
            
        </ContainerDiv>
    )
}

export default QuestionsCard
