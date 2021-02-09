// import './App.css';
import TakeButton from './components/Button/TakeChallenge';
import CreateButton from './components/Button/CreateAccount';
import LoginButton from './components/Button/Login';
import SignUpButton from './components/Button/SignUp';
import ProceedButton from './components/Button/Proceed';
import NextButton from './components/Button/Next';
import PreviousButton from './components/Button/Previous';
import Email from './components/Input/EmailInput';
import Password from './components/Input/PasswordInput';
import Username from './components/Input/UsernameInput';
import {GlobalStyle} from './components/GlobalStyle/style';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
    <GlobalStyle/>
        {/* <div> <TakeButton/></div> */}
        {/* <div> <CreateButton/></div> */}
        {/* <div> <LoginButton/></div> */}
        {/* <div> <SignUpButton/></div>
        <div> <ProceedButton/></div>
        <div> <NextButton/></div>
        <div> <PreviousButton/></div> */}
        {/* <Email/> */}
        <Password text="Confirm Password"/>
        <Username text="Confirm Password"/>
    </div>
  );
}

export default App;
