import React, { useEffect } from 'react'
import Aos from 'aos'
import './Projects.css'
import "aos/dist/aos.css"

function Project(props) {

    const {title, language, description, id, source, alt} = props

    useEffect(() => {
        Aos.init({ duration: 0})
    }, []);

    let fadeDirection = "fade-right"
    if(id % 2 === 0){
        fadeDirection = "fade-left"
    }

    let detailStatus = ""
    if(alt === undefined || alt === ""){
        detailStatus = "none"
    }
    return (
        <div data-aos={fadeDirection} data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-out" class="project-container">
            <h2 class="project-title">{title}</h2>
            <h4 class="project-language">{language}</h4>
            <p class="project-description">{description}</p>
                <a href={source}>
                <div className="link-wrapper">
                    <label style={{paddingRight:"1rem"}}>Source Code</label>
                    {/* <img className="github-icon" src="/assets/icons/github-240.png"></img> */}
                    </div>
                </a>
                <a style={{display:detailStatus}} href={alt}>
                <div className="link-wrapper">
                    <label>Details</label>
                    </div>
                </a>        
            </div>
    )
}

export default Project
