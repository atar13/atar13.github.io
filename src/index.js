import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Repo from './components/repo/Repo';
import Depiction from './components/repo/depictions/Depiction';
import Changelog from './components/repo/depictions/Changelog';

import tweaks from './components/repo/tweaks.json'

ReactDOM.render((
    <BrowserRouter basename='/'>
    <Switch>
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
    </Switch>
    </BrowserRouter>
  ), 
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
