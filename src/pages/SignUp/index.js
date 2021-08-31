import {useState,  useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Formik} from 'formik';
import {BsEyeSlash, BsEye} from 'react-icons/bs'
import { StyledLink } from '../../components/style';
import LoginNavbar from '../../components/Navbar/LoginNavbar';
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
import { InputDiv, Inputstyle, Text } from '../../components/Input/style';
import { Button } from '../../components/Input/PasswordInput/style';
import { signUpAction } from '../../redux/signUp/signupAction';
import { toast, ToastContainer } from 'react-toastify';


const SignUpPage =()=>{
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);
    const [submit, setSubmit] = useState(false);
    const {
        signUpReducer: { signUpError, signUpSuccess, signUpData, signUpLoading},
    } = useSelector((state => state))

    useEffect(() => {
        if(signUpError){
            setError(signUpError)
            toast.error(signUpError, {position: toast.POSITION.TOP_RIGHT})
        }
    }, [signUpSuccess, signUpError])

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
            <SignUpText>Create an Account</SignUpText>
            {/* FORMIK */}
            <Formik
            initialValues={{ name: "", firstname:"", lastname:"", username:"", email: "", password: "", confirmedPassword: ""}}
            
            validate={values => {
                let errors = {};
                values.name = values.firstname + " " + values.lastname
                // REGEX
                let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                // VALIDATION
                if(!values.firstname){
                    errors.firstname = "Firstname is required"
                }
                if(!values.lastname){
                    errors.lastname = "Lastname is required"
                }
                if(!values.username){
                    errors.username = "Username is required"
                }
                if (!values.email) {
                    errors.email = "Email is required";
                } else if (!regex.test(values.email)) {
                    errors.email = "Invalid email address";
                }

                if (!values.password) {
                    errors.password = "A password is required";
                } else if (values.password.length < 6) {
                    errors.password = "Password must be 6 characters or more";
                }

                if(!values.confirmedPassword){
                    errors.confirmedPassword = "Re-enter your password";
                }else if(values.confirmedPassword.length < 6){
                    errors.confirmedPassword = "Password must be 6 characters or more";
                }else if(values.confirmedPassword !== values.password){
                    errors.confirmedPassword = "Passwords must match"
                }
                
                return errors;
            }}
            onSubmit={(values) =>{

                dispatch(
                    signUpAction({
                        name: values.name,
                        username: values.username, 
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

                {/* Firstname field */}
                <SmallText htmlFor="firstname" style={{marginTop:"31px"}}>
                Firstname
                    
                </SmallText>
                <InputDiv>
                    <Inputstyle 
                    value={values.firstname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="firstname" 
                    id="firstname" 
                    type="text" 
                    placeholder = "Enter your Firstname" 
                    border={errors.firstname &&  "1px solid red"}
                    />
                </InputDiv>
                {touched.firstname && errors.firstname&& <Text color="red">{errors.firstname}</Text>}

                {/* Lastname field */}
                <SmallText htmlFor="lastname" style={{marginTop:"25px"}}>
                    Lastname
                </SmallText>
                <InputDiv>
                    <Inputstyle 
                    value={values.lastname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="lastname" 
                    id="lastname" 
                    type="text" 
                    placeholder = "Enter your Lastname" 
                    border={errors.lastname &&  "1px solid red"}
                    />
                </InputDiv>
                {touched.lastname && errors.lastname&& <Text color="red">{errors.lastname}</Text>}

                {/* username field */}
                <SmallText htmlFor="username" style={{marginTop:"25px"}}>
                    Username
                </SmallText>
                <InputDiv>
                    <Inputstyle 
                    value={values.username}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="username" 
                    id="username" 
                    type="text" 
                    placeholder = "Enter your Username" 
                    border={errors.email &&  "1px solid red"}
                    />
                </InputDiv>
                {touched.username && errors.username&& <Text color="red">{errors.username}</Text>}
                
                {/* email field */}
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

                {/* confirm password field */}
                <SmallText htmlFor="confirm_password" style={{marginTop:"25px"}}>
                    Confirm Password 
                </SmallText>
                <InputDiv>
                    <Inputstyle 
                    value={values.confirmedPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="confirmedPassword" 
                    id="confirm_password" 
                    type={visible ? "text":"password"} 
                    placeholder ="Confirm Your Password" 
                    border={errors.confirmedPassword && '1px solid red'} />
                <Button onClick={handleClick}>
                    {visible ? <BsEye size={24}/>:<BsEyeSlash size={24}/>}       
                </Button>
                </InputDiv>
                {touched.confirmedPassword && errors.confirmedPassword && <Text color="red">{errors.confirmedPassword}</Text>}
                 
                <ButtonDiv>
                    <SignUpButton/>
                    <LogIn> Have an account?&nbsp;
                    <StyledLink to='/login'><strong>Login</strong></StyledLink>
                    </LogIn>
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

            </LeftDiv>
            <RightDiv>
                    <BackgroundStyle src={process.env.PUBLIC_URL + './login_bck.svg'} alt='background_image'/> 
                    <BrainMist src={process.env.PUBLIC_URL + './book_mist.svg'} alt='brain_mist_image'/>
            </RightDiv> 
           </div>  
           {submit && <ToastContainer autoClose={2000} limit={1} />}   
           {console.log(error,signUpData,signUpLoading)}   
        </>
        
    )
}

export default SignUpPage