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
import AdsMsb from "./components/pages/adMSB/adsMSB";
import InvestsPage from "./components/pages/investsPage/investsPage";
import InvestsDetailsPage from "./components/pages/investsDetails/investsDetailsPage";
import EventPage from "./components/pages/eventPage/eventPage";
import EventDetails from "./components/pages/eventDetails/eventDetails";


import './App.css';

const App = () => {
  return (
      <BrowserRouter>
          <Header/>
          <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/all-ads-msb' component={AdsMsb}/>
              <Route path='/invests-page/:id' component={InvestsDetailsPage}/>
              <Route path='/invests-page' component={InvestsPage}/>
              <Route path='/event-page/:id' component={EventDetails}/>
              <Route path='/event-page' component={EventPage}/>
              <Route path='/register-cons-user' exact component={RegisterUserCons}/>
              <Route path='/register-invest' exact component={RegisterInvest}/>
              <Route path='/register-contact' exact component={RegisterMsBcontact}/>
              <Route path='/register-msb' exact component={RegisterMsb}/>
              <Route path='/register-cons' component={RegisterConsults}/>
              <Route path='/role' component={Role}/>
              <Route path='/'  component={MainPage}/>
          </Switch>
          <Footer/>
      </BrowserRouter>
  );
};

export default App;
