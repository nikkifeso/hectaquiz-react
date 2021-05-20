import LandingNavbar from '../../components/Navbar/LandingNavbar'
import {BackgroundStyle, BrainDesign, BoldText, LeftDiv, SmallText, ButtonDiv} from './style'
import TakeButton from '../../components/Button/TakeChallenge'


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
                <TakeButton />
            </ButtonDiv>
            
            
        </>
        
    )
}

export default LandingPage