import React from 'react'
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
            description:"iOS Jailbreak tweak that allows users to hide elements of their lockscreen dynamically based on custom multi-touch gestures."},
        {title:"Vaon", 
            language:"Objective-C", 
            description:"iOS Jailbreak tweak that displays bluetooth device battery information in the iOS app switcher."},
        {title:"Christmas Countdown Twitter Bot", 
            language:"Javascript (NodeJS, Express, Twitter API)", 
            description:"A Twitter bot that uses the Twitter API to tweet every day with the number of days remaining until Christmas."},
        {title:"Museeks Discord Playback Status", 
            language:"Javascript (NodeJS, Discord API)", 
            description:"A Discord extension that displays a user's music playback information as their Discord status."},
        {title:"go-dwm-statusbar", 
            language:"Go", 
            description:"System status bar for the dwm window manager on Linux written in Go. Includes date, time, CPU temperature, memory usage, battery, volume, and display brightness.  "},
        {title:"Hackintosh EFI", 
            language:"", 
            description:"Copy of my EFI Partition that allowed my Lenovo IdeaPad laptop to natively run macOS Catalina."},
        {title:"atar13.github.io", 
            language:"JavaScript (React)", 
            description:"My personal website (this one) and iOS jailbreak tweak package repository"}
    ];


    let history = useHistory()
    let pathname = history.location.pathname

    let navBarFooterCSS = ""
    if(pathname === "/projects"){
 
        return (
            <div>
                <Navbar />
                <div style={{paddingTop:'5%'}} />
                <h1 class="projects-title">Projects</h1>
                <div class="projects-container">
                    {projects.map((project) => (
                        <Project title={project.title} language={project.language} description={project.description}></Project>
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
                        <Project title={project.title} language={project.language} description={project.description}></Project>
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects
