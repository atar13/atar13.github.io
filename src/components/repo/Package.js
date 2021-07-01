import React from 'react'
import { Link } from 'react-router-dom'
import './Repo.css'

function Package(props) {

    const { tweak } = props

    let hiddenStatus
    if (tweak.hidden) {
        hiddenStatus = "none"
    }
    return (
        <div style={{ display: hiddenStatus }} className="pkg-wrapper">
            <div className="pkg-name">{tweak.name}</div>
            <div className="pkg-summary">{tweak.description}</div>
            <img className="pkg-thumbnail" src={`/assets/${tweak.bundle}/${tweak.thumbnail}`} alt={tweak.name} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link class="pkg-button-wrapper" to={`/repo/${tweak.bundle}`}>
                    <button class="pkg-button">Details</button>
                </Link>
            </div>
        </div>
    )
}

export default Package
