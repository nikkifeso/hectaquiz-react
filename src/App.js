// import './App.css';
import TakeButton from './components/Button/TakeChallenge';
import CreateButton from './components/Button/CreateAccount';
import LoginButton from './components/Button/Login';
import SignUpButton from './components/Button/SignUp';
import ProceedButton from './components/Button/Proceed';
import NextButton from './components/Button/Next';
import {GlobalStyle} from './components/GlobalStyle/style';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
    <GlobalStyle/>
        <div> <TakeButton color="#5332A6"/></div>
        <div> <CreateButton color="#5332A6"/></div>
        <div> <LoginButton color="#5332A6"/></div>
        <div> <SignUpButton color="#5332A6"/></div>
        <div> <ProceedButton color="#5332A6"/></div>
        <div> <NextButton color="#42366D"/></div>
    </div>
  );
}

export default App;
