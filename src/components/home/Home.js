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
            <div class="home-container fade-in">
                <div class="left">
                    <label class="name">Anthony Tarbinian</label>
                </div>
                <div class="right">
                    <p class="description">I'm an aspiring software developer 
                        and an undergraduate student studying Computer Science at UC San Diego.</p>
                </div>
            </div>
            <div style={{paddingTop:'20%'}}/>
            <div style={{paddingBottom:'5%'}}>
                <Projects />
            </div>
            <Footer />
        </div>)
}

export default Home