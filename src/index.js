import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/home/Home';
import { BrowserRouter , Route } from "react-router-dom";
import Projects from './components/projects/Projects';
import Repo from './components/repo/Repo';
import Depiction from './components/repo/depictions/Depiction';
import tweaks from './components/repo/tweaks.json'
import Changelog from './components/repo/depictions/Changelog';


ReactDOM.render((
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/repo" component = {Repo}/>
      <Route exact path = "/projects" component = {Projects}/>
      {tweaks.map((tweak) => (
        <Route exact path = {"/repo/"+tweak.bundle} 
          children = {<Depiction 
            name = {tweak.name}
            bundle = {tweak.bundle}
            description = {tweak.description}
            supportedVersions = {tweak['supported-versions']}
            features = {tweak.features}
            changelog = {tweak.changelog}
            screenshots = {tweak.screenshots} />} />
      ))}
      {tweaks.map((tweak) => (
        <Route exact path = {"/repo/" + tweak.bundle + "/changelog"} 
          children = {<Changelog changelog = {tweak.changelog}/>}/>
      ))}
    </BrowserRouter>
  </React.StrictMode>), 
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();