import QuestionsNavbar from '../../components/Navbar/QuestionsNavbar';
import {BackImg, Copyright} from '../Dashboard/style';
import FinishedCard from '../../components/FinishedCard';



const FinishedPage =()=>{
    return(
        <>
            <QuestionsNavbar backgroundColor="#FFFDF8"/>
            <BackImg src={process.env.PUBLIC_URL + './BrainAsset 1 2.svg'} alt="logo"/>
            <FinishedCard/>
            <Copyright>&copy; 2021 HectaQuiz,&nbsp;All rights reserved. </Copyright>
        </>
    )
}

export default FinishedPage