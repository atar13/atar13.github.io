import React from 'react'
import './Projects.css'

function Project(props) {

    const {title, language, description} = props

    return (
        <div class="project-container">
            <h2 class="project-title">{title}</h2>
            <h4 class="project-language">{language}</h4>
            <p class="project-description">{description}</p>
            <a href="https://google.com">
                <label>

                </label>
            </a>
        </div>
    )
}

export default Project
