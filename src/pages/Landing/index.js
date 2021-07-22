import LandingNavbar from '../../components/Navbar/LandingNavbar'
import {BackgroundStyle, BrainDesign, BoldText, LeftDiv, SmallText, ButtonDiv} from './style'
import TakeButton from '../../components/Button/TakeChallenge'
import {StyledLink} from '../../components/style';


const LandingPage=()=>{
    return(
        <>
            <LandingNavbar/>
            <BackgroundStyle src={process.env.PUBLIC_URL + './mist_background.svg'} alt='mist'/>   
            <BrainDesign src={process.env.PUBLIC_URL + './BrainAsset.svg'} alt='brain-books'/>
            <LeftDiv>
                <BoldText>Your Brain is a Universe</BoldText>
                <SmallText>Think you’re smarter than a 5th Grader? 
                Put your brain to the test.</SmallText>
                
            </LeftDiv>
            <ButtonDiv>
            <StyledLink to='/login'>
                <TakeButton />
            </StyledLink>
                
            </ButtonDiv>
            
            
        </>
        
    )
}

export default LandingPage