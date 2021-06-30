import React, { useState } from 'react'
import './Skills.css'

const ImageCarousel = (props) => {

    const [currentImg, setCurrentImg] = useState(1)

    return (
        <div class="carousel-container">
            <div class="carousel first-carousel" >
                {props.children.map(image =>
                    <img src={image.location}></img>
                )}
            </div>
            {/* <div class="carousel second-carousel" >
                {props.children.map(image =>
                    <img src={image.location}></img>
                )}
            </div> */}
        </div>
    )
}

const Skills = (props) => {
    const { images } = props;
    return (
        <div class="carousel-wrapper">
            <h1>Languages and Frameworks:</h1>
            <ImageCarousel>
                {images}
            </ImageCarousel>
        </div>
    )
}

export default Skills