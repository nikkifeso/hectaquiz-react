import { StyledLink } from '../../components/style';
import LoginNavbar from '../../components/Navbar/LoginNavbar';
import ProceedButton from '../../components/Button/Proceed';
import {BackgroundStyle,
        RightDiv, 
        LeftDiv,
        BrainMist, 
        SuccessText,
        CheckIcon,
        CheckIconDiv, 
        SmallText, 
        ButtonDiv,
        TextIconDiv
       } from './style'


const SignUpSuccess =()=>{
    return (
        <>
            <StyledLink to='/'>
                <LoginNavbar/>
           </StyledLink>
            <div style={{display:"flex"}}>
            <LeftDiv>
            <TextIconDiv>
                <SuccessText>Successful</SuccessText>
                    <CheckIconDiv>
                        <CheckIcon src={process.env.PUBLIC_URL + './fi_check-circle.svg'} alt='check_circle'/>
                    </CheckIconDiv>
            </TextIconDiv>
                
               
                <SmallText style={{marginTop:"31px"}}>Your account has been created successfully.
                            Please login to your account.
                </SmallText>

                
                <ButtonDiv>
                    <StyledLink to='/login'>
                        <ProceedButton/>
                    </StyledLink>           
                </ButtonDiv>

            </LeftDiv>
            <RightDiv>
                    <BackgroundStyle src={process.env.PUBLIC_URL + './login_bck.svg'} alt='background_image'/> 
                    <BrainMist src={process.env.PUBLIC_URL + './book_mist.svg'} alt='brain_mist_image'/>
            </RightDiv> 
           </div>
        </>
    )
}

export default SignUpSuccess;