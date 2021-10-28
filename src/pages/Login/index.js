import { useState, useEffect } from 'react';
import { StyledLink } from '../../components/style';
import { useDispatch, useSelector } from 'react-redux';
import {Formik} from 'formik';
import {BsEyeSlash, BsEye} from 'react-icons/bs'
import LoginNavbar from '../../components/Navbar/LoginNavbar';
import LoginButton from '../../components/Button/Login';
import FacebookAuth from '../../components/FacebookLogin';
import GoogleAuth from '../../components/GoogleLogin';
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
import { InputDiv, Inputstyle, Text } from '../../components/Input/style'
import { Button } from '../../components/Input/PasswordInput/style';
import {logInAction} from '../../redux/logIn/logInAction';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';


const LoginPage =()=>{
    const dispatch = useDispatch();
    const history = useHistory()
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);
    const [submit, setSubmit] = useState(false);

    const {
        logInReducer: {logInError, logInSuccess, logInData, logInLoading},
    } = useSelector(state=>state)

    useEffect(() => {
        if(logInSuccess){
            history.push("/dashboard")
        } else if(logInError){
            setError(logInError)
            toast.error(logInError, {position: toast.POSITION.TOP_RIGHT})
        }
        
    }, [logInError, logInSuccess, history])

    const handleClick =(e)=>{
        e.preventDefault()
        setVisible(!visible)
    }
    
    
    return(
        <>
           <StyledLink to='/'>
                <LoginNavbar/>
           </StyledLink>
           <div style={{display:"flex"}}>
            <LeftDiv>
            <LoginText>Login to your account</LoginText>
            <Formik 
                initialValues={{email: "", password: ""}}
            
                validate={values => {
                    let errors = {};
                    
                    // REGEX
                    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                    // VALIDATION
                   
                    if (!values.email) {
                        errors.email = "Email is required";
                    } else if (!regex.test(values.email)) {
                        errors.email = "Invalid email address";
                    }

                    if (!values.password) {
                        errors.password = "Password is required";
                    } else if (values.password.length < 6) {
                        errors.password = "Password must be 6 characters or more";
                    }

                    
                    return errors;
                }}
                onSubmit={(values) =>{
                    dispatch(
                        logInAction({
                            email: values.email,
                            password: values.password
                        })
                    );
                    setSubmit(true)
                } }

                render={({
                touched,
                errors,
                values,
                handleChange,
                handleBlur,
                handleSubmit
                 }) => (
            
            <form onSubmit={handleSubmit}>
                
                <SmallText htmlFor="email" style={{marginTop:"25px"}}>
                    Email Address   
                </SmallText>
                
                <InputDiv>
                    <Inputstyle 
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="email" 
                    id="email" 
                    type="email" 
                    placeholder = "Enter your Email Address" 
                    border={errors.email &&  "1px solid red"}
                    />
                </InputDiv>
                {touched.email && errors.email&& <Text color="red">{errors.email}</Text>}
                
                {/* password field */}
                <SmallText htmlFor="enter_password" style={{marginTop:"25px"}}>
                    Password
                </SmallText>
                <InputDiv>
                    <Inputstyle 
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="password" 
                    id="enter_password" 
                    type={visible ? "text":"password"} 
                    placeholder ="Enter Your Password" 
                    border={errors.password && '1px solid red'} />

                <Button onClick={handleClick}>
                    {visible ? <BsEye size={24}/>:<BsEyeSlash size={24}/>}       
                </Button>
                </InputDiv>
                {touched.password && errors.password && <Text color="red">{errors.password}</Text>}

                <RemCheckDiv>
                    <RemCheckBox type='checkbox'></RemCheckBox>
                    <RemCheckText style={{marginLeft:"11px"}}>Remember Me</RemCheckText>
                    <RemCheckText style={{marginLeft:"146px"}}>Forgot Password?</RemCheckText>
                </RemCheckDiv>
                <ButtonDiv>
                    <LoginButton/>
                    <StyledLink to='/sign-up'>
                        <CreateAccount> Create an Account</CreateAccount>
                    </StyledLink>
                    
                </ButtonDiv>
                </form>
                 )}

                 />

                <PassThroughDiv>
                    <PassThrough src={process.env.PUBLIC_URL + './Rectangle 6.svg'} alt='pass_through'/>
                    <PassThroughText>OR</PassThroughText>
                    <PassThrough src={process.env.PUBLIC_URL + './Rectangle 6.svg'} alt='pass_through'/>
                </PassThroughDiv> 

                <Social src={process.env.PUBLIC_URL + './google.svg'} alt='google'/>
                <Social src={process.env.PUBLIC_URL + './facebook.svg'} alt='facebook'/>
                <Social src={process.env.PUBLIC_URL + './twitter.svg'} alt='twitter'/>
                <FacebookAuth/>
                <GoogleAuth/>

            </LeftDiv>
            <RightDiv>
                    <BackgroundStyle src={process.env.PUBLIC_URL + './login_bck.svg'} alt='background_image'/> 
                    <BrainMist src={process.env.PUBLIC_URL + './book_mist.svg'} alt='brain_mist_image'/>
            </RightDiv> 
           </div>
           {submit && <ToastContainer autoClose={2000} limit={1} />}  
           {console.log(error,logInData,logInLoading)}  
        </>
        
    )
}

export default LoginPage