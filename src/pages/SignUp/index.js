import LoginNavbar from '../../components/Navbar/LoginNavbar';
import Email from '../../components/Input/EmailInput';
import Password from '../../components/Input/PasswordInput';
import SignUpButton from '../../components/Button/SignUp';
import {BackgroundStyle,
        RightDiv, 
        LeftDiv,
        BrainMist, 
        SignUpText, 
        SmallText, 
        ButtonDiv,
        LogIn,
        PassThrough,
        PassThroughDiv,
        PassThroughText,
        Social} from './style'


const SignUpPage =()=>{
    return(
        <>
           <LoginNavbar/>
           <div style={{display:"flex"}}>
            <LeftDiv>
                <SignUpText>Create an account</SignUpText>
                <SmallText style={{marginTop:"31px"}}>Email Address</SmallText>
                <Email></Email>
                <SmallText style={{marginTop:"5px"}}>Password</SmallText>
                <Password text='Enter Your Password'></Password>
                <SmallText style={{marginTop:"5px"}}>Confirm Password</SmallText>
                <Password text='Confirm Your Password'></Password>
                
                <ButtonDiv>
                    <SignUpButton/>
                    <LogIn> Have an account?&nbsp;<strong>Login</strong></LogIn>
                </ButtonDiv>

                <PassThroughDiv>
                    <PassThrough src={process.env.PUBLIC_URL + './Rectangle 6.svg'} alt='pass_through'/>
                    <PassThroughText>OR</PassThroughText>
                    <PassThrough src={process.env.PUBLIC_URL + './Rectangle 6.svg'} alt='pass_through'/>
                </PassThroughDiv> 

                <Social src={process.env.PUBLIC_URL + './google.svg'} alt='google'/>
                <Social src={process.env.PUBLIC_URL + './facebook.svg'} alt='facebook'/>
                <Social src={process.env.PUBLIC_URL + './twitter.svg'} alt='twitter'/>

            </LeftDiv>
            <RightDiv>
                    <BackgroundStyle src={process.env.PUBLIC_URL + './login_bck.svg'} alt='background_image'/> 
                    <BrainMist src={process.env.PUBLIC_URL + './book_mist.svg'} alt='brain_mist_image'/>
            </RightDiv> 
           </div>
              
           
        </>
        
    )
}

export default SignUpPage