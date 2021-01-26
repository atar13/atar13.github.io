import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Projects from '../projects/Projects'
import './Home.css'


function Home() {

    return (
        <div>
            <Navbar/>
            {/* <div style={{paddingTop:'4%'}}/> */}
            <div class="home-container parallax">
                {/* <div class="left"> */}
                    <label class="name">Anthony Tarbinian</label>
                {/* </div> */}
                <div class="description">
                    <h3 className="welcome">Welcome!</h3>
                    <p>I'm a first year undergraduate student studying Computer Science at UC San Diego and an aspiring software developer.</p>
                    <p>On this website you can view my personal projects 
                        and access my repository of iOS jailbreak tweaks.</p>
                </div>
            </div>
            {/* add a skills section */}
            <div style={{paddingTop:'0%'}}/>
            <div>
                <Projects />
            </div>
            <Footer />
        </div>)
}

export default Home
