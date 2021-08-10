import QuestionsNavbar from '../../components/Navbar/QuestionsNavbar';
import {BackImg, Copyright} from './style';
import CategoryCard from '../../components/Category/CategoryRectangle';
import StyledLink from '../../components/style';



const Dashboard =()=>{
    return(
        <>
            <QuestionsNavbar backgroundColor="#FFFDF8"/>
            <BackImg src={process.env.PUBLIC_URL + './BrainAsset 1 2.svg'} alt="logo"/>
            <CategoryCard/>
            <Copyright>&copy; 2021 HectaQuiz,&nbsp;All rights reserved. </Copyright>
        </>
    )
}

export default Dashboard