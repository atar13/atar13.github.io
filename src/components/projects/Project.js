import React, { useEffect } from 'react'
import Aos from 'aos'
import './Projects.css'
import "aos/dist/aos.css"

function Project(props) {

    const {title, language, description, id} = props

    useEffect(() => {
        Aos.init({ duration: 750})
    }, []);

    let fadeDirection = "fade-right"
    if(id % 2 === 0){
        fadeDirection = "fade-left"
    }
    return (
        <div data-aos={fadeDirection} data-aos-delay="150" data-aos-duration="1500" data-aos-easing="ease-out" class="project-container">
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
