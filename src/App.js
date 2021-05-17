import React from 'react';
import Header from "./components/UI/Header/header";
import Heading from "./components/UI/Content/Heading/Heading";
import Ads from "./components/UI/Content/ads/ads";
import Invests from "./components/UI/Content/Invests/invests";
import Event from "./components/UI/Content/Events/Event";
import Forum from "./components/UI/Content/forum/forum";
import Blog from "./components/UI/Content/blog/blog";
import Ask from "./components/UI/Content/ask/ask";
import Footer from "./components/UI/Footer/footer";

import './App.css';

const App = () => {
  return (
      <div>
        <Header/>
        <Heading/>
        <Ads/>
        <Invests/>
        <Event/>
        <Forum/>
        <Blog/>
        <Ask/>
        <Footer/>
      </div>
  );
};

export default App;
