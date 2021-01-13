import React from 'react'
import './DepictionFooter.css'

function DepictionFooter() {
    return (
        <div class = "depiction-footer">
            <a href="https://twitter.com/atar137h">
                <div className="depiction-footer-item">
                    <img style = {{height:'2rem'}} alt = "twitter" src = "/assets/icons/twitter.png"/>
                    <label>Twitter</label>
                </div>
            </a>
            <a href="https://github.com/atar13">
                <div className="depiction-footer-item">
                    <img style = {{height:'2rem'}} alt = "github" src = "/assets/icons/github-240.png"/>
                    <label>Github</label>
                </div>
            </a>
            <a href="mailto:atar13dev@gmail.com">
                <div className="depiction-footer-item">
                    <img style = {{height:'2rem'}} alt = "email" src = "/assets/icons/emailIcon@3x.png"/>
                    <label>Email</label>
                </div>
            </a>
            <a href="https://reddit.com/user/atar13">
                <div className="depiction-footer-item">
                    <img style = {{height:'2rem'}} alt = "reddit" src = "/assets/icons/redditIcon@3x.png"/>
                    <label>Reddit</label>
                </div>
            </a>
        </div>
    )
}

export default DepictionFooter
