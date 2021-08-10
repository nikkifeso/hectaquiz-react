// import './App.css';
import {GlobalStyle} from './components/GlobalStyle/style';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp'
import SignUpSuccess from './pages/SignUpSuccess/index.js';
import Dashboard from './pages/Dashboard';
import QuestionBoard from './pages/Questions';
import FinishedPage from './pages/Finished';
import HistoryPage from './pages/History';
import Error from './pages/Error'

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <GlobalStyle/>
     <Router>
      <Switch>
        <Route exact path='/'>
            <LandingPage/>
        </Route>
        <Route exact path='/login'>
            <LoginPage/>
        </Route>
        <Route exact path='/sign-up'>
            <SignUpPage/>
        </Route>
        <Route exact path='/success'>
            <SignUpSuccess/>
        </Route>
        <Route exact path='/dashboard'>
            <Dashboard/>
        </Route>
        <Route exact path='/questions'>
            <QuestionBoard/>
        </Route>
        <Route exact path='/finished'>
            <FinishedPage/>
        </Route>
        <Route exact path='/history'>
            <HistoryPage/>
        </Route>
        <Route exact path='*'>
            <Error/>
        </Route>
      </Switch>     
    </Router>
    {/* <ProgressBar question="2"/> */}
    {/* <Category category="General Knowledge"/> */}
    {/* <QuestionsNavbar backgroundColor="#FFFDF8"></QuestionsNavbar>
    <CategoryCard/> */}
      {/* <Logo></Logo>
      <LandingNavbar></LandingNavbar> */}
      {/* <LoginNavbar></LoginNavbar> */}
      {/* <QuestionsNavbar></QuestionsNavbar> */}
        {/* <div> <TakeButton/></div>
        <div> <CreateButton/></div>
        <div> <LoginButton/></div>
        <div> <SignUpButton/></div>
        <div> <ProceedButton/></div>
        <div> <NextButton text="Next Challenge"/></div>*/}
        {/* <div> <PreviousButton/></div>  */}
        {/* <Email/> */}
        {/* <Password text="Confirm Password"/>
        <Username text="Confirm Password"/> */}
        {/* <CategoryCard/>
        <FinishedCard/>
        <HistoryCard/>
        <QuestionsCard/> */}
        
    </div>
  );
}

export default App;
