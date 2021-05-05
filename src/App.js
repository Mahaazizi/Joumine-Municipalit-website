import React from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap' 
import Home from "./pages/Home";
import Achievement from "./pages/Achievements";
import Achievements from "./pages/AchievementDetailes";
import Neew from "./pages/NewsDetails";
import Documents from './pages/Documents';
import dossiers from './pages/Dossiers'
import pdfs from './pages/Pdfs';
import Error from './pages/Error';
import Contact from './pages/Contact';
import {Route , Switch, Router} from "react-router-dom";
import History from './pages/History';
import Navbar from './components/Navbar';
import Municipality from './pages/municipality';
import ServicesMunicipaux from './pages/services-municipaux';
import News from './pages/News';
function App() {
  return ( 
    <>
    <Navbar />
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/Achievements" component={Achievement} />
        <Route exact path="/Achievements/:slug" component={Achievements} />
        <Route exact path="/documents/:slug" component={Documents} />
        <Route exact path="/news/:slug" component={Neew} />
        <Route exact path="/pdfs" component={pdfs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/municipality" component={Municipality} />
        <Route exact path="/history" component={History} />
        <Route exact path="/ServicesMunicipaux" component={ServicesMunicipaux} />
        <Route exact path="/news" component={News} />
        <Route exact path="/Dossiers" component={dossiers}></Route>
        <Route component={Error} />
        

      </Switch>
    </>
  );
}

export default App;
