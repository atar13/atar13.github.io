//add a return to main page button 
//fix footer

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DepictionFooter from './DepictionFooter'
import './Depiction.css'
import {ios_version_check} from './ios_version_check'

function getDeviceCompatibility(min, max, other) {

    let value = ios_version_check(min, max, other, ()=> (
        console.log("Callback")
    ))

    console.log(value)

    return value
}

function Depiction(props) {

    const { name, bundle, description, supportedVersions, features, changelog, screenshots } = props

    let deviceCompatibility = getDeviceCompatibility(supportedVersions[0], supportedVersions[1], supportedVersions[2])
    let compatibilityMessage = ""
    if(deviceCompatibility !== 1){
        compatibilityMessage = name + ` is supported from iOS ${supportedVersions[0]} to ${supportedVersions[1]}`
    } else {
        compatibilityMessage = "✅ Your iOS Version is Supported"
    }

    // // const parsedChangelog = JSON.parse(changelog)
    let newestVersion = 1.0
    newestVersion = Object.keys(changelog)[0];

    let mostRecentChanges = changelog[newestVersion];
    let screenshotHiddenStatus = ""

    if(screenshots.length === 0){
        screenshotHiddenStatus = "hidden"
    }   

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div style={{color:'white'}}>
            <h1 class="tweak-name">{name}</h1>
            <h1 class="tweak-description" style={{paddingBottom:"2%"}}>{compatibilityMessage}</h1>
            <div style={{fontSize:"1.2rem", paddingBottom:"5%"}} class="tweak-description">{description}</div>
            <div style={{fontSize:"1.5rem"}} class={"tweak-description "+screenshotHiddenStatus}>Screenshots:</div>
            <div id="carousel" class={screenshotHiddenStatus}>
                {screenshots.map((screenshot) => (
                <div class="slide">
                    <img className="tweak-img" alt={screenshot} src= {"/assets/" + bundle +"/" + screenshot}></img>
                </div>
            ))}
            </div>
            <div style={{fontSize:"1.5rem"}} class="tweak-description">Feature List:</div>
            <ul class="tweak-description">
                {features.map((feature) => (
                    <li>{feature}</li>
                ))}
            </ul>
            <div style={{fontSize:"1.5rem", paddingBottom:"2%"}} class="tweak-description">Most Recent Change:</div>
            <div class="tweak-description">Version {newestVersion}</div>
            <ul class="tweak-description">
                {mostRecentChanges.map((change) => (
                    <li>{change}</li>
                ))}
            </ul>
            <Link to={`/repo/${bundle}/changelog`} class="tweak-description" style={{fontSize:"1.5rem", color:"gray"}}>Full Changelog</Link>
            <DepictionFooter />
        </div>
    )


}

export default Depiction
