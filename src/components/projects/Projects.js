import React, { useEffect }from 'react'
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar'
import Project from './Project';
import { useHistory } from 'react-router-dom'
import './Projects.css'


function Projects() {

    //add projects json here
    // or put it in a file
    //format:
    //Title
    //language
    //description
    //link

    const projects = [
        {title:"Houdini", 
            language:"Objective-C", 
            description:"iOS Jailbreak tweak that allows users to hide elements of their lockscreen dynamically based on custom multi-touch gestures.",
            id:1},
        {title:"Vaon", 
            language:"Objective-C", 
            description:"iOS Jailbreak tweak that displays bluetooth device battery information in the iOS app switcher.",
            id:2},
        {title:"Christmas Countdown Twitter Bot", 
            language:"Javascript (NodeJS, Express, Twitter API)", 
            description:"A Twitter bot that uses the Twitter API to tweet every day with the number of days remaining until Christmas.",
            id:3},
        {title:"Museeks Discord Playback Status", 
            language:"Javascript (NodeJS, Discord API)", 
            description:"A Discord extension that displays a user's music playback information as their Discord status.",
            id:4},
        {title:"go-dwm-statusbar", 
            language:"Go", 
            description:"System status bar for the dwm window manager on Linux written in Go. Includes date, time, CPU temperature, memory usage, battery, volume, and display brightness.",
            id:5},
        {title:"Hackintosh EFI", 
            language:"", 
            description:"Copy of my EFI Partition that allowed my Lenovo IdeaPad laptop to natively run macOS Catalina.",
            id:6},
        {title:"atar13.github.io", 
            language:"JavaScript (React)", 
            description:"My personal website (this one) and iOS jailbreak tweak package repository",
            id:7}
    ];


    let history = useHistory()
    let pathname = history.location.pathname





    if(pathname === "/projects"){
 
        return (
            <div>
                <Navbar />
                <div style={{paddingTop:'5%'}} />
                <h1 class="projects-title">Projects</h1>
                <div class="projects-container">
                    {projects.map((project) => (
                        <Project  title={project.title} language={project.language} description={project.description} id={project.id}></Project>
                    ))}
                </div>
                <div style={{paddingTop:'5%'}} />
                <Footer />
            </div>
        )
    } else {
        return (
            <div>
                <h1 class="projects-title">Projects</h1>
                <div class="projects-container">
                    {projects.map((project) => (
                        <Project  title={project.title} language={project.language} description={project.description} id={project.id}></Project>
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects
