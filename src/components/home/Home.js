import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Projects from '../projects/Projects'
import './Home.css'


function Home() {

    return (
        <div>
            <Navbar/>
            <div style={{paddingTop:'8%'}}/>
            <div class="home-container">
                {/* <div class="left"> */}
                    <label class="name">Anthony Tarbinian</label>
                {/* </div> */}
                <div class="description">
                    <h3>Welcome!</h3>
                    <p>I'm an aspiring software developer 
                        and an undergraduate student studying Computer Science at UC San Diego.</p>
                    <p>On this website you can view my personal projects 
                        and access my repository of iOS jailbreak tweaks.</p>
                </div>
            </div>
            <div style={{paddingTop:'0%'}}/>
            <div style={{paddingBottom:'5%'}}>
                <Projects />
            </div>
            <Footer />
        </div>)
}

export default Home