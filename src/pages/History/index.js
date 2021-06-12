import QuestionsNavbar from '../../components/Navbar/QuestionsNavbar';
import {BackImg, Copyright} from '../Dashboard/style';
import HistoryCard from '../../components/QuizHistoryCard';



const HistoryPage =()=>{
    return(
        <>
            <QuestionsNavbar backgroundColor="#FFFDF8"/>
            <BackImg src={process.env.PUBLIC_URL + './BrainAsset 1 2.svg'} alt="logo"/>
            <HistoryCard/>
            <Copyright>&copy; 2021 HectaQuiz,&nbsp;All rights reserved. </Copyright>
        </>
    )
}

export default HistoryPage