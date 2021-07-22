import QuestionsNavbar from '../../components/Navbar/QuestionsNavbar';
import {BackImg, Copyright} from '../Dashboard/style';
import QuestionsCard  from '../../components/QuestionsCard';


const QuestionBoard =()=>{
    return(
        <>
            <QuestionsNavbar backgroundColor="#FFFDF8"/>
            <BackImg src={process.env.PUBLIC_URL + './BrainAsset 1 2.svg'} alt="logo"/>
            <QuestionsCard/>
            <Copyright>&copy; 2021 HectaQuiz,&nbsp;All rights reserved. </Copyright>
        </>
    )
}

export default QuestionBoard