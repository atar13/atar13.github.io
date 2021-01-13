import React from 'react'
import { Link } from 'react-router-dom'
import './Repo.css'

function Package(props) {

    const { name, hidden, bundle, description } = props
    
    let hiddenStatus
    if(hidden){
        hiddenStatus = "none"
    }
    return (
        <div style={{display:hiddenStatus}} className="pkg-wrapper">
            <div className="pkg-name">{name}</div>
            <div className="pkg-summary">{description}</div>
            <Link to={`/repo/${bundle}`}>
                <button className="pkg-button">Details</button>
            </Link>
        </div>
    )
}

export default Package
