import React from 'react';
import { CardDiv, ScoreCicle, ScoreText, ButtonDiv, ImgDiv, Text, SmallText } from './style';
import NextButton from '../Button/Next';
import ShareResults from '../Button/ShareResults';

const FinishedCard =({category})=>{
    return (
        <CardDiv>
            {/* ProgressBar */}
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
                <ShareResults></ShareResults>
            </ButtonDiv>
            

        </CardDiv>
    )
}

export default FinishedCard
