import React from 'react'
import './DepictionFooter.css'

function DepictionFooter() {
    return (
        <div class = "depiction-footer">
            <div>
                <img />
                <label>Twitter</label>
            </div>
            <div>
                <img style = {{height:'2rem'}} alt = "github" src = "/assets/icons/github-240.png"/>
                <label >Github</label>
            </div>
            <div>
                <img />
                <label>Email</label>
            </div>
            <div>
                <img />
                <label>Reddit</label>
            </div>
        </div>
    )
}

export default DepictionFooter
