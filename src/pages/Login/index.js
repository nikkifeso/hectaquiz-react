import LoginNavbar from '../../components/Navbar/LoginNavbar';
import Email from '../../components/Input/EmailInput';
import Password from '../../components/Input/PasswordInput';
import LoginButton from '../../components/Button/Login';
import {BackgroundStyle,
        RightDiv, 
        LeftDiv,
        BrainMist, 
        LoginText, 
        SmallText, 
        RemCheckDiv, 
        RemCheckBox, 
        RemCheckText,
        ButtonDiv,
        CreateAccount,
        PassThrough,
        PassThroughDiv,
        PassThroughText,
        Social} from './style'


const LoginPage =()=>{
    return(
        <>
           <LoginNavbar/>
           <div style={{display:"flex"}}>
            <LeftDiv>
                <LoginText >Login to your account</LoginText>
                <SmallText style={{marginTop:"31px"}}>Email Address</SmallText>
                <Email></Email>
                <SmallText style={{marginTop:"5px"}}>Password</SmallText>
                <Password text='Enter Your Password'></Password>
                <RemCheckDiv>
                    <RemCheckBox type='checkbox'></RemCheckBox>
                    <RemCheckText style={{marginLeft:"11px"}}>Remember Me</RemCheckText>
                    <RemCheckText style={{marginLeft:"146px"}}>Forgot Password?</RemCheckText>
                </RemCheckDiv>
                <ButtonDiv>
                    <LoginButton/>
                    <CreateAccount> Create an Account</CreateAccount>
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

export default LoginPage