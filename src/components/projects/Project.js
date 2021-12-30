import React, { useEffect } from 'react'
import Aos from 'aos'
import './Projects.css'
import "aos/dist/aos.css"

function Project(props) {

    const { title, language, description, id, source, alt, thumbnail } = props

    useEffect(() => {
        Aos.init({ duration: 0 })
    }, []);

    let fadeDirection = "fade-right"
    if (id % 2 === 0) {
        fadeDirection = "fade-left"
    }

    let detailStatus = ""
    if (alt === undefined || alt === "") {
        detailStatus = "none"
    }

    let thumbnailStatus = ""
    if (thumbnail === undefined || thumbnail === "") {
        thumbnailStatus = "none"
    }
    return (
        <div data-aos={fadeDirection} data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-out" class="project-container">
            <h2 class="project-title">{title}</h2>
            <img alt={title} className="project-thumbnail" style={{ display: thumbnailStatus }} src={thumbnail} />
            <p class="project-description">{description}</p>
            {language && <h4 class="project-language">Written in {language}</h4>}
            <a className="link-wrapper" href={source}>
                <img className="github-icon" src="/assets/icons/github-240.png"></img>
                <label>Source Code</label>
            </a>
            <a className="link-wrapper" style={{ display: detailStatus }} href={alt}>
                <label>Details</label>
            </a>
        </div>
    )
}

export default Project
