import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./components/UI/Header/header";
import MainPage from './components/UI/Content/mainPage';
import RegisterInvest from "./components/UI/authContent/register/registerInvest/registerInvest";
import RegisterMsBcontact from "./components/UI/authContent/register/registerMSBcontact/registerMSBcontact";
import RegisterMsb from "./components/UI/authContent/register/registerMSB/registerMSB";
import RegisterUserCons from "./components/UI/authContent/register/registerConsUser/registerUserCons";
import RegisterConsults from './components/UI/authContent/register/registerConsults/registerConsults';
import Login from "./components/UI/authContent/login/login";
import Footer from "./components/UI/Footer/footer";
import Role from "./components/UI/authContent/Role/Role";

import './App.css';



const App = () => {
  return (
      <BrowserRouter>
          <Header/>
          <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/register-cons-user' exact component={RegisterUserCons}/>
              <Route path='/register-invest' exact component={RegisterInvest}/>
              <Route path='/register-contact' exact component={RegisterMsBcontact}/>
              <Route path='/register-msb' exact component={RegisterMsb}/>
              <Route path='/register-cons' component={RegisterConsults}/>
              <Route path='/role' component={Role}/>
              <Route path='/' exact component={MainPage}/>
          </Switch>
          <Footer/>
      </BrowserRouter>
  );
};

export default App;
