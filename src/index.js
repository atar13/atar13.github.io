import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/home/Home';
import { BrowserRouter , Route } from "react-router-dom";
import Projects from './components/projects/Projects';
import Repo from './components/repo/Repo';


ReactDOM.render((
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/repo" component = {Repo}/>
      <Route exact path = "/projects" component = {Projects}/>
      {/* <Route to={window.location.pathname} hash="/#">Projects</Route> */}
    </BrowserRouter>
  </React.StrictMode>), 
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
