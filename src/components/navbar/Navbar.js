import React from 'react'
import { act } from 'react-dom/test-utils'
import { useHistory, Link } from 'react-router-dom'
import './Navbar.css'


const activeClass = " active"

function Navbar() {
    let history = useHistory()
    let pathname = history.location.pathname

    let activeHome, activeRepo, activeProjects
    activeHome = activeRepo = activeProjects = "navbar-item-wrapper" 

    switch (pathname) {
        case "/":
            activeHome += activeClass
            break;
        case "/repo":
            activeRepo += activeClass
            break;
        case "/projects":
            activeProjects += activeClass
            break;
        default:
            break;
    }
    return (
        <div>
            <ul class="navbar-container">
                <div class={activeHome} style={{float:'left'}}><Link to='/' class="navbar-item">Home</Link></div>
                <div class={activeRepo} style={{float:'left'}}><Link to='/repo' class="navbar-item">Repo</Link></div>
                <div class={activeProjects} style={{float:'left'}}><Link to='/projects' class="navbar-item">Projects</Link></div>
                <div class="navbar-item-wrapper" style={{float:'right'}}>
                    <div class="navbar-item">
                    <a href="https://github.com/atar13">
                        <img class="navbar-icons" alt="Github" src="/assets/icons/github-240.png"></img>
                    </a>
                    </div>
                </div>
                <div class="navbar-item-wrapper" style={{float:'right'}}>
                    <div class="navbar-item">
                    <a href="https://www.linkedin.com/in/anthony-tarbinian-82446b13b/">
                        <img class="navbar-icons" alt="Linkedin" src="/assets/icons/linkedin-240.png"></img>
                    </a>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Navbar
