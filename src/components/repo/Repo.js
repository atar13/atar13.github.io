import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Package from './Package'
import './Repo.css'
import tweaks from './tweaks.json'

//add to cydia, zebra
//grid of tweaks 

function AddToPkg(props){

    const { name, link } = props
    return (
        <div style={{display:"flex", justifyContent:"center", paddingBottom:"3%"}}>
            <a class="add-to-pkg-button-wrapper" href={link}>
                <button class="add-to-pkg-button">Add To {name}</button>
            </a>
        </div>
    )
}



function Repo() {
    return (
        <div>
            <Navbar/>
            <h1 style={{display:"flex", justifyContent:"center", paddingBottom:"2%"}}>atar13's tweak repository</h1>
            <AddToPkg name="Cyida" link="cydia://url/https://cydia.saurik.com/api/share#?source=https://atar13.github.io/"/>
            <AddToPkg name="Sileo" link="sileo://source/https://atar13.github.io/"/>
            <AddToPkg name="Zebra" link="zbra://sources/add/https://atar13.github.io/" />
            <AddToPkg name="Installer" link="installer://https://atar13.github.io/"/>
            <div style={{display:"grid", placeContent:"center"}}>
                <h1 style={{display:"grid", placeContent:"center", paddingBottom:"5%"}}>Packages:</h1>
                {tweaks.map((tweak) => (
                    <Package name={tweak.name} hidden={tweak.hidden} bundle={tweak.bundle} description={tweak.description} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Repo
