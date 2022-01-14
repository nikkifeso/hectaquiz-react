import LandingNavbar from '../../components/Navbar/LandingNavbar';
import { useState } from 'react';
import {BackgroundStyle,
     BackgroundMobile1,
      BrainDesign, 
      BoldText, 
      LeftDiv, 
      SmallText, 
      ButtonDiv, 
      PageDiv, 
      BoldTextSmall, 
      BottomDesignRight, 
      BottomDesignLeft,
      MenuDiv} from './style'
import TakeButton from '../../components/Button/TakeChallenge'
import TakeButtonSmall from '../../components/Button/TakeChallenge/buttonSmall'
import {StyledLink} from '../../components/style';
import HamburgerMenu from '../../components/HamburgerMenu';


const LandingPage=()=>{
    const [state, setState] = useState(false)
    //   };
    const show = () =>{
        setState(!state) 
    } 
    return(
        <>
            <PageDiv>
            <LandingNavbar show={show}/>
                <BackgroundStyle src={process.env.PUBLIC_URL + './mist_img_new.svg'} alt='mist'/>     
                <BackgroundMobile1 src={process.env.PUBLIC_URL + './mobile-bck-1.svg'} alt='background'/>   
                <BrainDesign src={process.env.PUBLIC_URL + './BrainAsset.svg'} alt='brain-books'/>
                <MenuDiv>
                    {state === true && <HamburgerMenu/>}
                </MenuDiv>
                <LeftDiv>
                    <BoldText>Your Brain is a Universe</BoldText>
                    <BoldTextSmall>Your <br/> Brain is a Universe</BoldTextSmall>
                    <SmallText>Think you're smarter than a 5th Grader?<br/> Put your brain to the test.</SmallText>
                    
                </LeftDiv>
                <ButtonDiv>
                    <StyledLink to='/login'>
                        <TakeButton />
                        <TakeButtonSmall/>
                    </StyledLink>    
                </ButtonDiv>

                <BottomDesignLeft src={process.env.PUBLIC_URL + './Rectangle-left.svg'} alt='rect-left'/>
                <BottomDesignRight src={process.env.PUBLIC_URL + './Rectangle-right.svg'} alt='rect-right'/>
            </PageDiv>                
        </>
        
    )
}

export default LandingPage