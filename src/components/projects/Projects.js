import React from 'react'
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar'
import Project from './Project';
import { useHistory } from 'react-router-dom'
import projects from './projects.json'

function Projects() {

    //add github link (if applicable)
    //add project link (if applicable)
  


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
