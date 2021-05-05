import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
//import './index.css';
import App from './App';
import {DataProvider} from "./Contextstatic"
//import "./bootstrap/dist/css/bootstrap.css"
import * as serviceWorker from './serviceWorker';
import {NewsProvider} from "./Context2"

import {AchievementsProvider} from "./Context"


ReactDOM.render(
<AchievementsProvider>
<NewsProvider> 
    <DataProvider >
    <Router>
    <App /> 
    </Router>
    </DataProvider >
 </NewsProvider>
 </AchievementsProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
