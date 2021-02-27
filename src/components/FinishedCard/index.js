import React from 'react';
import { CardDiv, ScoreCicle, ScoreText, ButtonDiv, ImgDiv, Text, SmallText, TopText } from './style';
import NextButton from '../Button/Next';
import ShareResults from '../Button/ShareResults';
import ProgressBar from '../ProgressBar';

const FinishedCard =({category})=>{
    return (
        <CardDiv>
            <TopText>Finished</TopText>
            <ProgressBar question="7"/>
            <ImgDiv>
                <img src={process.env.PUBLIC_URL + './thumbs_up.svg'} alt='thumbs_up'></img>
            </ImgDiv>
            
            <SmallText>You have completed the {category} quiz</SmallText><br></br>
            <Text>Awesome!<br></br>Below is your score</Text>
            <ScoreCicle>
                <ScoreText>10/10</ScoreText>
            </ScoreCicle>
            <ButtonDiv>
                <NextButton text="New Challenge"></NextButton>
            </ButtonDiv>
            <ButtonDiv>
                <ShareResults/>
            </ButtonDiv>
            

        </CardDiv>
    )
}

export default FinishedCard
