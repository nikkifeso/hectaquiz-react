import React, {useState} from 'react';
import {ContainerDiv, QuestionSpan} from './style';
import ProgressBar from '../ProgressBar';
import {TopText}from '../FinishedCard/style';
import NextButton from '../Button/Next';
import {Label, AnswerDiv, CheckBorder, CheckIndicator} from '../Checkbox/style'

const QuestionsCard =()=>{
    const [checked, setChecked] = useState("");
    const handleFormSubmit =(event)=>{
        event.preventDefault()
    }
    
    return (
        <ContainerDiv>
            <TopText>Question 1</TopText>
            <ProgressBar question="1"/>  
            <QuestionSpan> Who is your President?</QuestionSpan>  
            <form onSubmit={handleFormSubmit}>
                <AnswerDiv>
                    <Label>
                            <CheckBorder type="radio"
                                name="options"
                                value="Fk Abudu"
                                onChange={(e)=>{setChecked(e.target.value)}}
                            />
                            Fk Abudu
                    </Label>
                </AnswerDiv>
                <AnswerDiv >
                    <Label>
                            <CheckBorder type="radio"
                                name="options"
                                value="Boo Harry"
                                onChange={(e)=>{setChecked(e.target.value)}}
                            />
                            Boo Harry
                    </Label>
                </AnswerDiv>
                <AnswerDiv>
                    <Label>
                            <CheckBorder type="radio"
                                name="options"
                                value="Speed Darlington"
                                onChange={(e)=>{setChecked(e.target.value)}}
                            />
                            Speed Darlington
                    </Label>
                </AnswerDiv>
                <div style={{margin: "40px 55px 100px 235px"}}>
                <NextButton type="submit" text="Next Question"/>
                </div>       
            </form>
        </ContainerDiv>
    )
}

export default QuestionsCard
